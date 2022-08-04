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

import com.store.dto.ClientDTO;
import com.store.enums.FailureEnum;
import com.store.enums.StatusEnum;
import com.store.services.ClientService;
import com.store.utils.ValidationUtils;

import jakarta.validation.Valid;

@RestController
@RequestMapping(value="client")
public class ClientController extends ValidationUtils{
	String serviceName="client";
	
    @Autowired
    ClientService clientService;
	
	@PostMapping(value = "save")
    public ResponseEntity<?>  SaveClient(@RequestBody @Valid ClientDTO clientDTO, BindingResult bindingResult ){
		validateBindingResults(bindingResult, FailureEnum.SAVE_CLIENT_FAILED, serviceName);		 
		HttpStatus httpStatus;
		String clientStatus = clientService.saveClient(clientDTO);
	
		if (clientStatus == StatusEnum.CLIENT_SAVED.value)
			httpStatus = HttpStatus.OK;
		else 
			httpStatus = HttpStatus.BAD_REQUEST;
		
	  return new ResponseEntity<>(clientStatus,httpStatus);
    }
	@GetMapping(value = "getall")
	public ResponseEntity<?> getClients(){
	  return new ResponseEntity<>(clientService.getAllClient(), HttpStatus.OK);
	}
	@GetMapping(value = "getallsorted")
	public ResponseEntity<?> getClientSorted(){
	  return new ResponseEntity<>(clientService.getAllClientSorted(), HttpStatus.OK);
	}
	@PostMapping(value = "update")
    public ResponseEntity<?> UpdateClient(@RequestBody @Valid ClientDTO clientDTO, BindingResult bindingResult ){
		validateBindingResults(bindingResult, FailureEnum.UPDATE_CLIENT_FAILED, serviceName);	
		return new ResponseEntity<>(clientService.updateClientById(clientDTO),HttpStatus.OK);
    }
	@DeleteMapping(value = "delete/{id}")
	public  ResponseEntity<?> deleteClientbyid(@PathVariable("id") long id) {
		return new ResponseEntity<>(clientService.deleteClientById(id), HttpStatus.OK);
	}
	
}
