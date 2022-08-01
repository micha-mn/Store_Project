package com.store.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.repositories.NamingSequenceRepository;
import com.store.services.NamingSequenceService;

@Service
public class NamingSequenceService {
	
	@Autowired
	NamingSequenceRepository namingSequenceRepository;
  
	public String getSupplierSequence()
	{      
        return namingSequenceRepository.findAll().get(0).getSuppSequence();
	}
	public String getItemSequence()
	{      
        return namingSequenceRepository.findAll().get(0).getItemSequence();
	}
	
	public void updateSupplierSequence()
	{
		namingSequenceRepository.updateSupplierSequence();	
	}
	public void updateItemSequence()
	{
		namingSequenceRepository.updateItemSequence();	
	}
}
