package com.store.dto;

import com.store.domain.Brand;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class BrandDTOResponce {
	 private Brand brand;
     private String Message;
}
