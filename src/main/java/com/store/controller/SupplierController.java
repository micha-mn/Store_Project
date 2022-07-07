package com.store.controller;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.store.domain.Supplier;
import com.store.dto.SupplierDTO;
import com.store.enums.FailureEnum;
import com.store.enums.SupplierStatus;
import com.store.exception.BadRequestException;
import com.store.services.SupplierService;

import jakarta.validation.Valid;

@RestController
@RequestMapping(value="supplier")
public class SupplierController {
	String serviceName="supplier";
	
    @Autowired
    SupplierService supplierService;
	
	@PostMapping(value = "save")
    public ResponseEntity<?>  SaveSupplier(@RequestBody @Valid SupplierDTO supplierDTO, BindingResult bindingResult ){
		validateBindingResults(bindingResult, FailureEnum.SAVE_SUPPLIER_FAILED);		 
		HttpStatus httpStatus;
		String supplierStatus = supplierService.SaveSupplier(supplierDTO);
	
		if (supplierStatus == SupplierStatus.SAVED.value)
			httpStatus = HttpStatus.OK;
		else 
			httpStatus = HttpStatus.BAD_REQUEST;
		
	  return new ResponseEntity<>(supplierStatus,httpStatus);
    }
	@PostMapping(value = "update")
    public ResponseEntity<?> UpdateSupplier(@RequestBody @Valid SupplierDTO supplierDTO, BindingResult bindingResult ){
		validateBindingResults(bindingResult, FailureEnum.UPDATE_SUPPLIER_FAILED);
		return new ResponseEntity<>(supplierService.updateSupplierById(supplierDTO),HttpStatus.OK);
    }
	@GetMapping(value = "getall")
	public ResponseEntity<?> getSuppliers(){
	  return new ResponseEntity<>(supplierService.getAllSupplier(), HttpStatus.OK);
	}
	
	@DeleteMapping(value = "delete/{id}")
	public  ResponseEntity<?> deleteSupplierbyid(@PathVariable("id") long id) {
		return new ResponseEntity<>(supplierService.deleteSupplierById(id), HttpStatus.OK);
	}
	 private void validateBindingResults(BindingResult bindingResult, FailureEnum constant) {
		    if (bindingResult.hasErrors()) {
		      throw new BadRequestException(
		          bindingResult.getFieldErrors().stream()
		              .map(FieldError::getDefaultMessage)
		              .collect(Collectors.joining(",")),
		          constant,
		          serviceName);
		    }
		  }
}
