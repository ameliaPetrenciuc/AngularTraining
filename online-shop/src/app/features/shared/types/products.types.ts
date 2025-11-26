import { ProductCategory } from './product-category.types'; 

export interface Product {
    id: string; 
    name: string;
    description: string;
    price: number; 
    weight?: number; 
    imageUrl?: string;
    category?: ProductCategory; 
}