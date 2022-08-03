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
		String name1 = firstName.length()>1?firstName.substring(0,2):firstName;
		String name2 = lastName.length()>2?lastName.substring(0,3):lastName;
		//String suppCode = name1+name2+"_"+generateSequence(NamingSequenceEnum.SEQUENCE_SUPPLIER.getSequenceName());
		String suppCode = name1+name2;
		return suppCode.toUpperCase();
       
    }
	public String generateSequence(String sequenceName) {
		String sequence ="";
		if (sequenceName==NamingSequenceEnum.SEQUENCE_SUPPLIER.getSequenceName())
			  sequence = namingSequenceservice.getSupplierSequence();
		else if (sequenceName==NamingSequenceEnum.SEQUENCE_ITEM.getSequenceName())
			sequence = namingSequenceservice.getItemSequence();
		return sequence;
	}
	public String generateItemCode(String suppCode) {
		
		return suppCode+"_"+generateSequence(NamingSequenceEnum.SEQUENCE_ITEM.getSequenceName());
	}
	public String updateItemCode(String oldCode, String suppCode) {
		
		return suppCode+"_"+oldCode.split("_")[1];
	}
}