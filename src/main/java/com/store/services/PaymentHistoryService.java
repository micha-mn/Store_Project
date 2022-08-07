package com.store.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.domain.PaymentHistory;
import com.store.repositories.PaymentHistoryRepository;

import jakarta.validation.Valid;

@Service
public class PaymentHistoryService {
   @Autowired
   PaymentHistoryRepository paymentHistoryRepository;
   
   public void SavePaymentHistory(@Valid PaymentHistory paymentHistory) {
	   paymentHistoryRepository.save(paymentHistory);
   }
}
