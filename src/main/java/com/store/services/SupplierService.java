package com.store.services;

import java.util.List;
import com.store.domain.Supplier;
import com.store.dto.SupplierDTO;

public interface SupplierService {

	String SaveSupplier(SupplierDTO SupplierDTO);
	
	List<Supplier> getAllSupplier();

	String deleteSupplierById(long id);
	
	String updateSupplierById(Supplier supplier);
}
