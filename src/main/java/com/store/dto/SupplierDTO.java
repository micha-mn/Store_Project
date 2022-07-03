package com.store.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class SupplierDTO {
    private String firstName;
    private String lastName;
	private String address;
    private String phone;
    private String instagram;
}
