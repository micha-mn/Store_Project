package com.store.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.domain.PaymentHistory;
import com.store.domain.Sales;
import com.store.domain.SalesView;
import com.store.dto.SalesDTO;
import com.store.dto.SalesResponceDTO;
import com.store.enums.StatusEnum;
import com.store.repositories.ItemRepository;
import com.store.repositories.SalesRepository;
import com.store.repositories.SalesViewRepository;

import jakarta.validation.Valid;

@Service
public class SalesService {
	@Autowired
	SalesRepository salesRepository;
	@Autowired
	SalesViewRepository salesViewRepository;
	@Autowired
	ItemRepository itemRepository;
	@Autowired
	PaymentHistoryService paymentHistoryService;
	
	public boolean checkPaymentAmount(double price,double paymentAmount) {
		boolean isGreater = (price>=paymentAmount)?false:true;
			return isGreater;
	}
	public SalesResponceDTO SaveSale(@Valid SalesDTO salesDTO) {
		Sales sales = null;
		Optional<SalesView> salesView =null;
		String status="";
		double paymentAmount=((salesDTO.getOtherPayment()!=null)?salesDTO.getOtherPayment():0)+((salesDTO.getCashPayment()!=null)?salesDTO.getCashPayment():0);
		boolean isGreater=checkPaymentAmount(salesDTO.getTotalPrice(),paymentAmount);
		if(isGreater)
		{
			SalesResponceDTO salesResponceDTO = SalesResponceDTO.builder().salesView(null).Message(StatusEnum.SALES_PRICE_SMALLER.value).build();
			return salesResponceDTO;
		}
		if(salesDTO.getAction().equalsIgnoreCase("save"))
		{
			sales = Sales.builder()
					    .clientId(salesDTO.getClientId())
					    .itemId(salesDTO.getItemId())
					    .notes(salesDTO.getNotes())
					    .sellingDate(new Date())
					    .paymentMethodId(salesDTO.getPaymentMethodId())
					    .cashPayment(salesDTO.getCashPayment())
					    .otherPayment(salesDTO.getOtherPayment())
					    .deferredPayment(salesDTO.getDeferredPayment())
					    .paymentStatus(salesDTO.getPaymentStatus())
					    .totalPrice(salesDTO.getTotalPrice())
	    		        .build();
	      status= StatusEnum.SALES_SAVED.value;
	      itemRepository.updateSoldItem(salesDTO.getItemId());
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
				    .paymentMethodId(salesDTO.getPaymentMethodId())
				    .cashPayment(salesDTO.getCashPayment())
				    .otherPayment(salesDTO.getOtherPayment())
				    .deferredPayment(salesDTO.getDeferredPayment())
				    .paymentStatus(salesDTO.getPaymentStatus())
				    .totalPrice(salesDTO.getTotalPrice())
    		        .build();
			  status= StatusEnum.SALES_UPDATED.value;
			  salesView = findByID(salesRepository.save(sales).getId());
			}
		PaymentHistory paymentHistory = PaymentHistory.builder().saleId(String.valueOf(salesView.get().getId()))
				                                                .deferredPayment(salesView.get().getDeferredPayment())
				                                                .cashPayment(salesView.get().getCashPayment())
				                                                .otherPayment(salesView.get().getOtherPayment())
				                                                .paymentDate(new Date())
				                                                .paymentMethodId(salesView.get().getPaymentMethodId())
				                                                .totalPrice(salesView.get().getTotalPrice())
				                                                .paymentStatus(salesView.get().getPaymentStatus())
				                                                .build();
		paymentHistoryService.SavePaymentHistory(paymentHistory);
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
