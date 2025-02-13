package org.example.controller;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

public class RegistrationController {
    @RestController
    @RequestMapping("/api/registrations")
    @RequiredArgsConstructor
    public class RegistrationController {
        private final RegistrationService registrationService;

        @PostMapping
        @PreAuthorize("hasRole('USER')")
        @Operation(summary = "Register for event")
        public ResponseEntity<?> registerForEvent(@RequestBody RegistrationRequest request,
                                                  Authentication authentication) {
            return registrationService.register(request, authentication);
        }
    }
}
