package com.store.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.store.domain.PaymentMethod;

public interface PaymentMethodRepository extends JpaRepository<PaymentMethod, Long> {

}
