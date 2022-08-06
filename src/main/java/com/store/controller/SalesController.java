package com.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.store.dto.SalesDTO;
import com.store.enums.FailureEnum;
import com.store.services.PaymentMethodService;
import com.store.services.SalesService;
import com.store.utils.ValidationUtils;

import jakarta.validation.Valid;

@RestController
@RequestMapping(value="sales")
public class SalesController extends ValidationUtils{
	
	String serviceName="sales";
	@Autowired
	SalesService salesService;
	@Autowired
	PaymentMethodService paymentMethodService;
	
	@PostMapping(value = "save")
    public ResponseEntity<?>  SaveSale(@RequestBody @Valid SalesDTO salesDTO, BindingResult bindingResult ){
		 validateBindingResults(bindingResult, salesDTO.getAction().equalsIgnoreCase("save")?FailureEnum.SAVE_SALES_FAILED:FailureEnum.UPDATE_SALES_FAILED, serviceName);		
	  return new ResponseEntity<>(salesService.SaveSale(salesDTO),HttpStatus.OK);
    }
	@GetMapping(value = "getall")
	public ResponseEntity<?> getSales(){
	  return new ResponseEntity<>(salesService.getAllSales(), HttpStatus.OK);
	}
	@GetMapping(value = "getpaymentmethods")
	public ResponseEntity<?> getPaymentMethod(){
	  return new ResponseEntity<>(paymentMethodService.getPaymentMethod(), HttpStatus.OK);
	}
	// @DeleteMapping(value = "delete/{id}")
	public  ResponseEntity<?> deleteSaleById(@PathVariable("id") long id) {
		return new ResponseEntity<>(salesService.deleteSalesById(id), HttpStatus.OK);
	}
}
