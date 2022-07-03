package com.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.store.domain.Supplier;
import com.store.dto.SupplierDTO;
import com.store.enums.SupplierStatus;
import com.store.services.SupplierService;

@RestController
@RequestMapping(value="supplier")
public class SupplierController {
	
    @Autowired
    SupplierService supplierService;
	
	@PostMapping(value = "savesupplier")
    public ResponseEntity<?>  SaveSupplier(@RequestBody SupplierDTO supplierDTO){
		HttpStatus httpStatus;
		String supplierStatus = supplierService.SaveSupplier(supplierDTO);
	
		if (supplierStatus == SupplierStatus.SAVED.value)
			httpStatus = HttpStatus.OK;
		else 
			httpStatus = HttpStatus.BAD_REQUEST;
		
	  return new ResponseEntity<>(supplierStatus,httpStatus);
    }
	@PostMapping(value = "updatesupplier")
    public ResponseEntity<?> UpdateSupplier(@RequestBody Supplier supplier){
	  return new ResponseEntity<>(supplierService.updateSupplierById(supplier),HttpStatus.OK);
    }
	@GetMapping(value = "getsuppliers")
	public ResponseEntity<?> getSuppliers(){
	  return new ResponseEntity<>(supplierService.getAllSupplier(), HttpStatus.OK);
	}
	
	@DeleteMapping(value = "deletesupplierbyid/{id}")
	public  ResponseEntity<?> deleteSupplierbyid(@PathVariable("id") long id) {
		return new ResponseEntity<>(supplierService.deleteSupplierById(id), HttpStatus.OK);
	}
	
}
