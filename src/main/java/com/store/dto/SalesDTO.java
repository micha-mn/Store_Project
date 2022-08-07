package com.store.dto;

import java.util.Date;

import com.store.constant.ErrorConstants;

import jakarta.persistence.Column;
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
	  @NotNull(message = ErrorConstants.SALES_PAYMENTMETHODID_NOT_NULL)
	  private String paymentMethodId;
	  @NotNull(message = ErrorConstants.SALES_DOWNPAYTMENT_NOT_NULL)
	  private Double downPayment;
	  private Double downPaymentCard;
	  @NotNull(message = ErrorConstants.SALES_TOTALPRICE_NOT_NULL)
	  private Double totalPrice;
	  @NotNull(message = ErrorConstants.SALES_DEFERREDPAYMENT_NOT_NULL)
	  private Double deferredPayment;
	  @NotNull(message = ErrorConstants.SALES_PAYTMENTSTATUS_NOT_NULL)
	  private String paymentStatus;
} 
