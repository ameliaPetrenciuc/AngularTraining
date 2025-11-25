package ro.msg.learning.shop.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import ro.msg.learning.shop.dto.AuthRequest;
import ro.msg.learning.shop.dto.AuthResponse;
import ro.msg.learning.shop.dto.UserProfileDTO;
import ro.msg.learning.shop.entity.UserAccount;
import ro.msg.learning.shop.mapper.UserMapper;
import ro.msg.learning.shop.repository.UserAccountRepository;
import ro.msg.learning.shop.service.AuthService;
import org.springframework.security.oauth2.jwt.Jwt;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
        AuthResponse response = authService.login(request.getUsername(), request.getPassword());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/profile")
    public ResponseEntity<UserProfileDTO> getProfile(@AuthenticationPrincipal Jwt jwt) {
        String username = jwt.getSubject();
        Optional<UserAccount> userOpt = userAccountRepository.findByUsername(username);

        if (userOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(UserMapper.toProfileDTO(userOpt.get()));
    }
}
