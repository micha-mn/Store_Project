package com.store.domain;

import com.store.audit.Auditable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;
@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
@Entity
@Table(name = "Items")
public class Item extends Auditable<String> {
	@Id
    @GeneratedValue
    private Long id;
	private String itemCode;
	private String suppCode;
    private Long brandId;
    private String description;
	private String inclusions;
    private String consignmentPrice;
    private Date consignmentDate;
    private String sellingPrice ;
}
