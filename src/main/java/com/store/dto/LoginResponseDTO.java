package com.store.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.store.domain.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class LoginResponseDTO {
    @JsonProperty("isValid")
    private Boolean valid;
    private String accessToken;
    private User user;
}

