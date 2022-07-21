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

import com.store.dto.ItemDTO;
import com.store.enums.FailureEnum;
import com.store.services.ItemService;
import com.store.utils.ValidationUtils;

import jakarta.validation.Valid;

@RestController
@RequestMapping(value="item")
public class ItemController extends ValidationUtils{
	String serviceName="item";
	
	 @Autowired
	 ItemService itemService;
	
	@PostMapping(value = "save")
    public ResponseEntity<?>  SaveItem(@RequestBody @Valid ItemDTO itemDTO, BindingResult bindingResult ){
		validateBindingResults(bindingResult, FailureEnum.SAVE_ITEM_FAILED, serviceName);		
	  return new ResponseEntity<>(itemService.SaveItem(itemDTO),HttpStatus.OK);
    }
	@GetMapping(value = "getall")
	public ResponseEntity<?> getSuppliers(){
	  return new ResponseEntity<>(itemService.getAllItem(), HttpStatus.OK);
	}
	
	@DeleteMapping(value = "delete/{id}")
	public  ResponseEntity<?> deleteItemById(@PathVariable("id") long id) {
		return new ResponseEntity<>(itemService.deleteItemById(id), HttpStatus.OK);
	}
	
}
