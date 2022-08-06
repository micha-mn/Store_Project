package com.store.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.domain.PaymentMethod;
import com.store.repositories.PaymentMethodRepository;
@Service
public class PaymentMethodService {
	@Autowired
	PaymentMethodRepository paymentMethodRepository;

    public List<PaymentMethod> getPaymentMethod()
    {
    	return paymentMethodRepository.findAll();
    }
}
