package com.store.domain;

import java.util.Date;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.store.audit.Auditable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
@Entity
@Table(name = "payment_history")
public class PaymentHistory extends Auditable<String> {
	@Id
	@GeneratedValue(generator = "payment_sequence")
	   @GenericGenerator(
	      name = "payment_sequence",
	      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
	      parameters = {
	        @Parameter(name = "sequence_name", value = "payment_sequence"),
	        @Parameter(name = "initial_value", value = "1"),
	        @Parameter(name = "increment_size", value = "1")
	        }
	    )
    private Long id;	
	private String saleId;
	private String paymentMethodId;
	private Double cashPayment;
	private Double otherPayment;
	private Double totalPrice;
	private Double deferredPayment;
	@Column(length=70)
	private String paymentStatus;
	@Temporal(TemporalType.TIMESTAMP)
	private Date paymentDate;
}
