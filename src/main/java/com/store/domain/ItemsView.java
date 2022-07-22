package com.store.domain;
import java.util.Date;

import com.store.audit.Auditable;

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
@Table(name = "items_view")
public class ItemsView extends Auditable<String> {
	@Id
    private Long id;
	private String itemCode;
    private String suppCode;
    private String brandId;
	private String brandName;
    private String description;
    private String inclusions;
    private String consignmentPrice;
    private Date consignmentDate;
    private String sellingPrice;
    private Date creationDate;
    private String createdBy;
    private Date lastModifiedDate;
    private String lastModifiedBy;
}

