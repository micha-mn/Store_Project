package com.store.domain;

import jakarta.persistence.Column;
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
@Table(name = "configuration_table")
public class ConfigurationTable {
	@Id
    @GeneratedValue
    private Long id;
	 @Column(length=60)
    private String tableName;
	 @Column(length=60)
    private String columnName;
	private boolean isHidden;
}
