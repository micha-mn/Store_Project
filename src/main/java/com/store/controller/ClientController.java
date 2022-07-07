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
import com.store.enums.ClientStatus;
import com.store.enums.FailureEnum;
import com.store.exception.BadRequestException;
import com.store.services.ClientService;

@RestController
@RequestMapping(value="client")
public class ClientController {
	String serviceName="client";
	
    @Autowired
    ClientService clientService;
	
	@PostMapping(value = "save")
    public ResponseEntity<?>  SaveClient(@RequestBody ClientDTO clientDTO, BindingResult bindingResult ){
		validateBindingResults(bindingResult, FailureEnum.SAVE_CLIENT_FAILED);		 
		HttpStatus httpStatus;
		String clientStatus = clientService.SaveClient(clientDTO);
	
		if (clientStatus == ClientStatus.SAVED.value)
			httpStatus = HttpStatus.OK;
		else 
			httpStatus = HttpStatus.BAD_REQUEST;
		
	  return new ResponseEntity<>(clientStatus,httpStatus);
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
