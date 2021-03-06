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


@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
@Entity
@Table(name = "Supplier")
public class Supplier extends Auditable<String> {
	@Id
    @GeneratedValue
    private Long id;
	private String suppCode;
    private String firstName;
    private String lastName;
	private String address;
    private String phone;
    private String instagram;
}
