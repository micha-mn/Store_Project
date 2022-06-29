package com.store.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
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
@Table(name = "naming_sequence")
public class NamingSequence {
	@Id
    @GeneratedValue
    @SequenceGenerator(name = "supp_sequence", sequenceName = "supp_sequence")
    private String suppSequence;
	@GeneratedValue
    @SequenceGenerator(name = "item_sequence", sequenceName = "item_sequence")
    private String itemSequence;
}
