package com.store.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.domain.NamingSequence;
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
	public void SaveNewSupplierSequence(String supplierCode) {
		NamingSequence namingSequence = NamingSequence.builder()
													  .suppCode(supplierCode)
													  .itemSequence("1")
													  .build();
		namingSequenceRepository.save(namingSequence);
	}
	public NamingSequence getSupplierCode(String supplierCode)
	{      
        return namingSequenceRepository.findBySuppCode(supplierCode);
	}
	public void updateItemSupplierSequence(String suppCode) {
		
		namingSequenceRepository.updateItemSupplierSequence(suppCode);	
		
	}
	public void deleteItemSuppSequence(String suppCode) {
		namingSequenceRepository.deleteBySuppCode(suppCode);
	}
}
