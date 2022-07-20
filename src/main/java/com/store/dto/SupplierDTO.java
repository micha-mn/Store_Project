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
public class SupplierDTO {
    private Long id;
	private String suppCode;
    @NotNull(message = ErrorConstants.SUPPLIER_FIRST_NAME_NOT_NULL)
    private String firstName;
    @NotNull(message = ErrorConstants.SUPPLIER_LAST_NAME_NOT_NULL)
    private String lastName;
    @NotNull(message = ErrorConstants.SUPPLIER_ADDRESS_NOT_NULL)
	private String address;
    @NotNull(message = ErrorConstants.SUPPLIER_PHONE_NOT_NULL)
    private String phone;
    private String instagram;
}
