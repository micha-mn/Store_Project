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
public class BrandDTO {
	    private Long id;
	    private String nameAr;
	    @NotNull(message = ErrorConstants.BRAND_NAMEEN_NOT_NULL)
	    private String nameEn;
}
