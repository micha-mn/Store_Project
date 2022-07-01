package com.store.services;

import java.util.List;

import com.store.domain.Supplier;
import com.store.dto.SupplierDTO;

public interface SupplierService {

	void SaveSupplier(SupplierDTO SupplierDTO);
	
	List<Supplier> getAllSupplier();

	void deleteSupplierById(long id);
	
	void updateSupplierById(Supplier supplier);
}
