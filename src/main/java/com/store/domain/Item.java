package com.store.domain;

import com.store.audit.Auditable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;
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
	@GeneratedValue(generator = "items_sequence")
	   @GenericGenerator(
	      name = "items_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "items_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
    private Long id;
	private String itemCode;
	private String suppCode;
	@Column(length=10)
    private String brandId;
    @Column(length=60)
    private String description;
    @Column(length=60)
    private String condition;
	private String inclusions;
	@Column(length=60)
    private Double consignmentPrice;
    private Date consignmentDate;
    @Column(length=60)
    private Double sellingPrice;
    private boolean isSold;
}
