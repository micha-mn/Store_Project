package com.store.dto;

import com.store.constant.ErrorConstants;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class ClientDTO {
	private Long id;
    @NotNull(message = ErrorConstants.CLIENT_NAME1_NOT_NULL)
    private String name1;
    @NotNull(message = ErrorConstants.CLIENT_NAME2_NOT_NULL)
    private String name2;
	private String address;
    @NotNull(message = ErrorConstants.CLIENT_PHONE_NOT_NULL)
    private String phone;
    private String instagram;
}
