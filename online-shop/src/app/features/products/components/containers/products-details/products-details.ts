import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../../../shared/types/products.types';
import { ProductsDetailsView } from '../../presentational/products-details-view/products-details-view';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { AuthService } from '../../../../../services/auth-service';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { addToCart } from '../../../../shared/state/cart.actions';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmDialog } from '../../../../shared/components/confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [ProductsDetailsView, AsyncPipe, MatDialogModule, MatSnackBarModule],
  templateUrl: './products-details.html',
  styleUrl: './products-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsDetails implements OnInit {
  readonly product = signal<Product | undefined>(undefined);
  private readonly route = inject(ActivatedRoute);
  private readonly productsService = inject(ProductsService);
  protected authService = inject(AuthService);
  private router = inject(Router);
  private readonly store = inject(Store);

  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }

    this.productsService.getById(id).subscribe({
      next: (p) => {
        this.product.set(p);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  protected onAddToCart(product: Product): void {
    this.store.dispatch(addToCart({ product }));
    this.snackBar.open('Added to cart', 'Close', { duration: 2000 });
  }

  protected onDeleteProduct(): void {
    const p = this.product();
    if (!p) 
      return;

    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '400px', 
      data: { 
        message: `Are you sure you want to delete ${p.name}?` 
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.productsService.delete(p.id).subscribe({
          next: () => {
            this.snackBar.open('Product deleted successfully!', 'Close', {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: ['success-snackbar'] 
            });

            this.router.navigate(['/products']);
          },
          error: (err) => {
            console.error(err);
            this.snackBar.open('Error deleting product', 'Close', { duration: 3000 });
          },
        });
      }
    });
  }

  protected onEditProduct(): void {
    const p = this.product();
    if (p) {
      this.router.navigate(['/products/edit', p.id]);
    }
  }
}
