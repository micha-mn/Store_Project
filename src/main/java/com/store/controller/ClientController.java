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

import com.store.dto.ClientDTO;
import com.store.dto.SupplierDTO;
import com.store.enums.ClientStatus;
import com.store.enums.FailureEnum;
import com.store.exception.BadRequestException;
import com.store.services.ClientService;

import jakarta.validation.Valid;

@RestController
@RequestMapping(value="client")
public class ClientController {
	String serviceName="client";
	
    @Autowired
    ClientService clientService;
	
	@PostMapping(value = "save")
    public ResponseEntity<?>  SaveClient(@RequestBody @Valid ClientDTO clientDTO, BindingResult bindingResult ){
		validateBindingResults(bindingResult, FailureEnum.SAVE_CLIENT_FAILED);		 
		HttpStatus httpStatus;
		String clientStatus = clientService.saveClient(clientDTO);
	
		if (clientStatus == ClientStatus.SAVED.value)
			httpStatus = HttpStatus.OK;
		else 
			httpStatus = HttpStatus.BAD_REQUEST;
		
	  return new ResponseEntity<>(clientStatus,httpStatus);
    }
	@GetMapping(value = "getall")
	public ResponseEntity<?> getClients(){
	  return new ResponseEntity<>(clientService.getAllClient(), HttpStatus.OK);
	}
	@PostMapping(value = "update")
    public ResponseEntity<?> UpdateClient(@RequestBody @Valid ClientDTO clientDTO, BindingResult bindingResult ){
		validateBindingResults(bindingResult, FailureEnum.UPDATE_CLIENT_FAILED);
		return new ResponseEntity<>(clientService.updateClientById(clientDTO),HttpStatus.OK);
    }
	@DeleteMapping(value = "delete/{id}")
	public  ResponseEntity<?> deleteClientbyid(@PathVariable("id") long id) {
		return new ResponseEntity<>(clientService.deleteClientById(id), HttpStatus.OK);
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
