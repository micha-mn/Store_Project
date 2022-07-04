package com.store.utils;

import org.springframework.beans.factory.annotation.Autowired;

import com.store.enums.NamingSequenceEnum;
import com.store.repositories.NamingSequenceRepository;
import com.store.services.NamingSequenceService;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

public class CommonUtils {
	@Autowired
	public static NamingSequenceService namingSequenceservice;
	public static String generateSupplierCode(String firstName, String lastName){
		
		String suppCode = firstName.substring(0,2).toUpperCase()+lastName.substring(0,3).toUpperCase()+"_"+generateSequence(NamingSequenceEnum.SEQUENCE_SUPPLIER.getSequenceName());
		return suppCode;
       
    }
	public static String generateSequence(String sequenceName) {
		String sequence ="";
		if (sequenceName==NamingSequenceEnum.SEQUENCE_SUPPLIER.getSequenceName())
			  sequence = namingSequenceservice.getSupplierSequence();
		
		return sequence;
	}
}