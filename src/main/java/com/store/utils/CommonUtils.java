package com.store.utils;

import org.springframework.stereotype.Service;

import com.store.enums.NamingSequenceEnum;
import com.store.services.NamingSequenceService;

@Service
public class CommonUtils {
	
	
	NamingSequenceService namingSequenceservice;
	public CommonUtils(NamingSequenceService namingSequenceservice){
		this.namingSequenceservice = namingSequenceservice;
	}
	public String generateSupplierCode(String firstName, String lastName){
		String name1 = firstName.length()>1?firstName.substring(0,2).toUpperCase():firstName;
		String name2 = lastName.length()>2?lastName.substring(0,3).toUpperCase():lastName;
		String suppCode = name1+name2+"_"+generateSequence(NamingSequenceEnum.SEQUENCE_SUPPLIER.getSequenceName());
		return suppCode;
       
    }
	public String generateSequence(String sequenceName) {
		String sequence ="";
		if (sequenceName==NamingSequenceEnum.SEQUENCE_SUPPLIER.getSequenceName())
			  sequence = namingSequenceservice.getSupplierSequence();
		
		return sequence;
	}
}