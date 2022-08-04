package com.store.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.domain.Sales;
import com.store.domain.SalesView;
import com.store.dto.SalesDTO;
import com.store.dto.SalesResponceDTO;
import com.store.enums.StatusEnum;
import com.store.repositories.SalesRepository;
import com.store.repositories.SalesViewRepository;

import jakarta.validation.Valid;

@Service
public class SalesService {
	@Autowired
	SalesRepository salesRepository;
	@Autowired
	SalesViewRepository salesViewRepository;
	
	public SalesResponceDTO SaveSale(@Valid SalesDTO salesDTO) {
		Sales sales = null;
		 Optional<SalesView> salesView =null;
		String status="";
		if(salesDTO.getAction().equalsIgnoreCase("save"))
		{
			sales = Sales.builder()
					    .clientId(salesDTO.getClientId())
					    .itemId(salesDTO.getItemId())
					    .notes(salesDTO.getNotes())
	    		        .build();
	     status= StatusEnum.SALES_SAVED.value;
	      salesView = findByID(salesRepository.save(sales).getId());
		}
		else 
			{ 
			
			sales = Sales.builder()
					.id(salesDTO.getId())
					.clientId(salesDTO.getClientId())
				    .itemId(salesDTO.getItemId())
				    .notes(salesDTO.getNotes())
				    .sellingDate(salesDTO.getSellingDate())
    		        .build();
			  status= StatusEnum.SALES_UPDATED.value;
			  salesView = findByID(salesRepository.save(sales).getId());
			}
		
		SalesResponceDTO salesResponceDTO = SalesResponceDTO.builder().salesView(salesView).Message(status).build();
		return salesResponceDTO;
			
	}
	
	private Optional<SalesView> findByID(Long id) {
		
		return salesViewRepository.findById(id);
	}

	public List<SalesView> getAllSales() {
			
			return salesViewRepository.findAllByOrderByIdDesc();
		}
	public String deleteSalesById(long id)
	{
		salesRepository.deleteById(id);
		return StatusEnum.SALES_DELETED.value;
	}

	public boolean checkIfItemIdExistsInSales(long itemId) {
		boolean exists = salesRepository.existsByItemId(String.valueOf(itemId));
		return exists;
	}
	public boolean checkIfClientIdExistsInSales(long clientId) {
		boolean exists = salesRepository.existsByClientId(String.valueOf(clientId));
		return exists;
	}
}
