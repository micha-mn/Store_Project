package com.store.utils;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class CommonUtils {
 
	public static String generateSupplierCode(String firstName, String lastName,String sequence){
		
		String suppCode = firstName.substring(0,2).toUpperCase()+lastName.substring(0,3).toUpperCase()+"_"+sequence;
		return suppCode;
       
    }
}