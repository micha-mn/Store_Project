package com.store.dto;

import java.util.Date;

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
	  private String itemId;
	  private String clientId;
	  private Date sellingDate;
	  private String notes;
} 
