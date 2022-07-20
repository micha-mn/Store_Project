package com.store.utils;

import java.util.stream.Collectors;

import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import com.store.enums.FailureEnum;
import com.store.exception.BadRequestException;

public class ValidationUtils {

	 protected void validateBindingResults(BindingResult bindingResult, FailureEnum constant, String serviceName) {
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
