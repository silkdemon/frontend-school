package org.example.controller;

import io.swagger.v3.oas.annotations.Operation;
import org.example.dto.SignInRequest;
import org.example.dto.SignUpRequest;
import org.example.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/signup")
    @Operation(summary = "User registration")
    public ResponseEntity<?> signUp(@RequestBody SignUpRequest request) {
        return userService.signUp(request);
    }

    @PostMapping("/signin")
    @Operation(summary = "User authentication")
    public ResponseEntity<?> signIn(@RequestBody SignInRequest request) {
        return userService.signIn(request);
    }
}
