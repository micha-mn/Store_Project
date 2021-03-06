package com.store.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.domain.Supplier;
import com.store.dto.SupplierDTO;
import com.store.enums.StatusEnum;
import com.store.repositories.SupplierRepository;
import com.store.services.SupplierService;
import com.store.utils.CommonUtils;

@Service
public class SupplierService {

	@Autowired
	SupplierRepository supplierRepository;
	@Autowired
	NamingSequenceService namingSequenceservice;
	@Autowired
	CommonUtils commonUtils;
	public boolean checkifSupplierexists(SupplierDTO supplierDTO) {
		Optional<Supplier> issupplier = supplierRepository.findByFirstNameIgnoreCaseAndLastNameIgnoreCase(supplierDTO.getFirstName(),
				supplierDTO.getLastName());
		if (issupplier.isPresent())
			return true;
		else
			return false;
	}
	public String SaveSupplier(SupplierDTO supplierDTO)
	{  String supplierStatus="";
	   boolean exists = checkifSupplierexists(supplierDTO);
	   if (!exists) 
			{
			 String supplierCode = commonUtils.generateSupplierCode(supplierDTO.getFirstName(),supplierDTO.getLastName());
				
			 Supplier supplier = Supplier.builder()
									.suppCode(supplierCode)
									.firstName(supplierDTO.getFirstName())
									.lastName(supplierDTO.getLastName())
									.phone(supplierDTO.getPhone())
									.address(supplierDTO.getAddress())
									.instagram(supplierDTO.getInstagram()).build();
		
		    supplierRepository.save(supplier);
		    namingSequenceservice.updateSupplierSequence();	
		    supplierStatus = StatusEnum.SUPPLIER_SAVED.value;
			}
		else
			supplierStatus = StatusEnum.SUPPLIER_EXIST.value;
		
		return supplierStatus;
	}
	public List<Supplier> getAllSupplier()
	{
		return supplierRepository.findAllByOrderByIdDesc();	
	}
	
	public String deleteSupplierById(long id)
	{
		supplierRepository.deleteById(id);
		return StatusEnum.SUPPLIER_DELETED.value;
	}
	
	public String updateSupplierById(SupplierDTO supplierDTO)
	{
		 Supplier updatesupplier = Supplier.builder()
				    .id(supplierDTO.getId())
					.suppCode(supplierDTO.getSuppCode())
					.firstName(supplierDTO.getFirstName())
					.lastName(supplierDTO.getLastName())
					.phone(supplierDTO.getPhone())
					.address(supplierDTO.getAddress())
					.instagram(supplierDTO.getInstagram()).build();
		 	supplierRepository.save(updatesupplier);
		 	return StatusEnum.SUPPLIER_UPDATED.value;
	}
	
	
}
