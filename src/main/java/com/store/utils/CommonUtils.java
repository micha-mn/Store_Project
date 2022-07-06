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
		
		String suppCode = firstName.substring(0,2).toUpperCase()+lastName.substring(0,3).toUpperCase()+"_"+generateSequence(NamingSequenceEnum.SEQUENCE_SUPPLIER.getSequenceName());
		return suppCode;
       
    }
	public String generateSequence(String sequenceName) {
		String sequence ="";
		if (sequenceName==NamingSequenceEnum.SEQUENCE_SUPPLIER.getSequenceName())
			  sequence = namingSequenceservice.getSupplierSequence();
		
		return sequence;
	}
}