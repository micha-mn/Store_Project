package com.store.dto;


import java.util.Optional;

import com.store.domain.SalesView;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class SalesResponceDTO {
	 private Optional<SalesView> salesView;
     private String Message;
}
