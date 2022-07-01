package com.store.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.domain.Supplier;
import com.store.dto.SupplierDTO;
import com.store.repositories.NamingSequenceRepository;
import com.store.repositories.SupplierRepository;
import com.store.services.NamingSequenceService;
import com.store.services.SupplierService;
import com.store.utils.CommonUtils;

@Service
public class SupplierServiceImpl implements SupplierService {

	@Autowired
	SupplierRepository supplierRepository;
	@Autowired
	NamingSequenceRepository namingSequenceRepository;
	@Autowired
	NamingSequenceService namingSequenceservice;
	
	public void SaveSupplier(SupplierDTO supplierDTO)
	{  Optional<Supplier> issupplier = supplierRepository.findByFirstNameAndLastName(supplierDTO.getFirstName(),supplierDTO.getLastName());
		if (!issupplier.isPresent())
			{
			 String sequence = namingSequenceservice.getSupplierSequence();
			 String supplierCode = CommonUtils.generateSupplierCode(supplierDTO.getFirstName(),supplierDTO.getLastName(),sequence);
				
			 Supplier supplier = Supplier.builder()
									.suppCode(supplierCode)
									.firstName(supplierDTO.getFirstName())
									.lastName(supplierDTO.getLastName())
									.phone(supplierDTO.getPhone())
									.address(supplierDTO.getAddress())
									.instagram(supplierDTO.getInstagram()).build();
		
		    supplierRepository.save(supplier);
		    namingSequenceRepository.updateSupplierSequence();	
			}
		
	}
	public List<Supplier> getAllSupplier()
	{
		return supplierRepository.findAll();	
	}
	
	public void deleteSupplierById(long id)
	{
		supplierRepository.deleteById(id);
	}
	
	public void updateSupplierById(Supplier supplier)
	{
		supplierRepository.updateSupplierById(supplier.getFirstName(), supplier.getLastName(), supplier.getAddress(), supplier.getPhone(), supplier.getInstagram(),supplier.getId());
	} 
	
}
