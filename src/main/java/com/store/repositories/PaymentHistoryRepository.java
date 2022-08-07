package com.store.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.store.domain.PaymentHistory;

public interface PaymentHistoryRepository  extends JpaRepository<PaymentHistory, Long> {

}
