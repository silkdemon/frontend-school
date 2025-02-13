package org.example.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class RegistrationRequest {
    @NotNull
    private Long eventId;

    @NotBlank
    private String participationType; // ONLINE/OFFLINE

    private String comment;
}

