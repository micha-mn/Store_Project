package com.store.utils;

import org.springframework.beans.factory.annotation.Autowired;

import com.store.domain.Supplier;
import com.store.repositories.NamingSequenceRepository;

public class CommonUtils {
	
	
	
	public static String generateSupplierCode(Supplier supplier){
		String SuppCode = supplier.getFirstName().substring(0,2).toUpperCase()+supplier.getLastName().substring(0,3).toUpperCase();
		return null;
       
    }
}