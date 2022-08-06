package com.store.domain;


import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
@Entity
@Table(name = "sales_view")
public class SalesView {
	@Id
    private Long id;
	private String itemId;
	private String itemCode;
	private String brandName;
	private String description;
	private Double sellingPrice;
	private String clientName;
	private String clientId;
	private Date sellingDate;
	private String notes;
	private String paymentMethodId;
	private String paymentMethod;
	private Double downPayment;
	private Double downPaymentCard;
	private Double deferredPayment;
	private Double totalPrice;
	private String paymentStatus;
	private Date createdDate;
	private Date lastModifiedDate;
}
