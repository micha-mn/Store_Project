package com.store.dto;

import java.util.Date;

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
public class ItemDTO {
	    private Long id;
		private String itemCode;
		private String action;
		@NotNull(message = ErrorConstants.ITEM_SUPPCODE_NOT_NULL)
		private String suppCode;
		@NotNull(message = ErrorConstants.ITEM_BRANDID_NOT_NULL)
	    private String brandId;
		@NotNull(message = ErrorConstants.ITEM_DESCRIPCTION_NOT_NULL)
	    private String description;
		@NotNull(message = ErrorConstants.ITEM_INCLUSIONS_NOT_NULL)
		private String inclusions;
		@NotNull(message = ErrorConstants.ITEM_CONSIGNMENTPRICE_NOT_NULL)
	    private Double consignmentPrice;
		@NotNull(message = ErrorConstants.ITEM_CONSIGNMENTDATE_NOT_NULL)
	    private Date consignmentDate;
		@NotNull(message = ErrorConstants.ITEM_SELLINGPRICE_NOT_NULL)
	    private Double sellingPrice;
		private String condition;
		private String isSold;
		private String returnedStatus;
}
