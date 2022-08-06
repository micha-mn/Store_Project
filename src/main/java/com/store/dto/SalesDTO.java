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
public class SalesDTO {
	  private Long id;
	  private String action;
	  @NotNull(message = ErrorConstants.SALES_ITEMID_NOT_NULL)
	  private String itemId;
	  @NotNull(message = ErrorConstants.SALES_CLIENTID_NOT_NULL)
	  private String clientId;
	  private Date sellingDate;
	  private String notes;
} 
