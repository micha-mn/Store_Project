package com.store.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
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
@Table(name = "Brand")
public class Brand {
	@Id
    @GeneratedValue
    private Long id;
    private String nameAr;
    private String nameEn;
}
