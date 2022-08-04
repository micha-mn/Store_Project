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
	private String itemCode;
	private String itemId;
	private String clientName;
	private String clientId;
	private Date sellingDate;
	private String notes;
}
