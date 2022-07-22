package com.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.store.dto.BrandDTO;
import com.store.enums.FailureEnum;
import com.store.services.BrandService;
import com.store.utils.ValidationUtils;

import jakarta.validation.Valid;

@RestController
@RequestMapping(value="brand")
public class BrandController extends ValidationUtils{
	String serviceName="brand";
	
	@Autowired
	BrandService brandService;
	
	@PostMapping(value = "save")
    public ResponseEntity<?>  SaveSupplier(@RequestBody @Valid BrandDTO brandDTO, BindingResult bindingResult ){
		validateBindingResults(bindingResult, FailureEnum.SAVE_BRAND_FAILED,serviceName);		 
		
	  return new ResponseEntity<>(brandService.saveBrand(brandDTO),HttpStatus.OK);
    }
	@GetMapping(value = "getall")
	public ResponseEntity<?> getSuppliers(){
	  return new ResponseEntity<>(brandService.getAllBrands(), HttpStatus.OK);
	}
	
}
