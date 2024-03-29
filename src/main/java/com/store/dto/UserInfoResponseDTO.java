package com.store.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class UserInfoResponseDTO {
	    private Long id;
	    private String username;
		private String firstName;
	    private String lastName;
	    private boolean isFirstLogin;
	    private String jwt;
}
