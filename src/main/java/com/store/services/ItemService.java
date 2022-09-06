package com.store.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.domain.Brand;
import com.store.domain.Item;
import com.store.domain.ItemsView;
import com.store.dto.BrandDTO;
import com.store.dto.BrandDTOResponce;
import com.store.dto.ItemDTO;
import com.store.dto.ItemResponceDTO;
import com.store.enums.StatusEnum;
import com.store.repositories.ItemRepository;
import com.store.repositories.ItemViewRepository;
import com.store.utils.CommonUtils;

import jakarta.validation.Valid;

@Service
public class ItemService {
	@Autowired
	ItemRepository itemRepository;
	@Autowired
	ItemViewRepository itemViewRepository;
	@Autowired
	NamingSequenceService namingSequenceservice;
	@Autowired
	CommonUtils commonUtils;
	@Autowired
	SalesService salesService;
	
	public boolean checkifBrandIdExistsInItem(long brandId) {
		boolean exists = itemRepository.existsByBrandId(String.valueOf(brandId));
			return exists;
	}
	public boolean checkifSuppCodeExistsInItem(String suppCode) {
		boolean exists = itemRepository.existsBySuppCode(suppCode);
			return exists;
	}
	public boolean checkifItemIsSold(long itemId) {
		boolean isSold = itemRepository.findById(itemId).isSold();
			return isSold;
	}
	public Item getItem(long id) {
		Item item= itemRepository.findById(id);
			return item;
	}
	public ItemResponceDTO SaveItem(@Valid ItemDTO itemDTO) {
		Item item = null;
		Optional<ItemsView> ItemsView =null;
		String status="";
		if(itemDTO.getAction().equalsIgnoreCase("save"))
		{
		String itemCode = commonUtils.generateItemCode(itemDTO.getSuppCode());
	     item = Item.builder()
	    		        .suppCode(itemDTO.getSuppCode())
	    		        .brandId(itemDTO.getBrandId())
	    		        .description(itemDTO.getDescription())
	    		        .inclusions(itemDTO.getInclusions())
	    		        .consignmentDate(itemDTO.getConsignmentDate())
	    		        .consignmentPrice(itemDTO.getConsignmentPrice())
	    		        .sellingPrice(itemDTO.getSellingPrice())
	    		        .itemCode(itemCode)
	    		        .condition(itemDTO.getCondition())
	    		        .isSold(itemDTO.getIsSold().equalsIgnoreCase("true")?true:false)
	    		        .returnedStatus(itemDTO.getReturnedStatus())
	    		        .build();
	     status= StatusEnum.ITEM_SAVED.value;
	     ItemsView = findByID(itemRepository.save(item).getId());
	     namingSequenceservice.updateItemSupplierSequence(itemDTO.getSuppCode(),namingSequenceservice.getSupplierCode(itemDTO.getSuppCode()).getItemSequence());
		}
		else if(itemDTO.getAction().equalsIgnoreCase("return"))
		{ 
			boolean isSold = checkifItemIsSold(itemDTO.getId());
			if(!isSold)
			{ item = Item.builder()
			        .id(itemDTO.getId())
			        .suppCode(itemDTO.getSuppCode())
			        .brandId(itemDTO.getBrandId())
			        .description(itemDTO.getDescription())
			        .inclusions(itemDTO.getInclusions())
			        .consignmentDate(itemDTO.getConsignmentDate())
			        .consignmentPrice(itemDTO.getConsignmentPrice())
			        .sellingPrice(itemDTO.getSellingPrice())
			        .itemCode(itemDTO.getItemCode())
			        .condition(itemDTO.getCondition())
			        .isSold(itemDTO.getIsSold().equalsIgnoreCase("true")?true:false)
			        .returnedStatus(itemDTO.getReturnedStatus())
			        .build();
		    status= StatusEnum.ITEM_UPDATED.value;
		    ItemsView = findByID(itemRepository.save(item).getId());
		  }
			else
			status= StatusEnum.ITEM_RETURN_FAILED.value;
		}
		else 
			{ 
			      item = Item.builder()
				        .id(itemDTO.getId())
				        .suppCode(itemDTO.getSuppCode())
				        .brandId(itemDTO.getBrandId())
				        .description(itemDTO.getDescription())
				        .inclusions(itemDTO.getInclusions())
				        .consignmentDate(itemDTO.getConsignmentDate())
				        .consignmentPrice(itemDTO.getConsignmentPrice())
				        .sellingPrice(itemDTO.getSellingPrice())
				        .itemCode(itemDTO.getItemCode())
				        .condition(itemDTO.getCondition())
				        .isSold(itemDTO.getIsSold().equalsIgnoreCase("true")?true:false)
				        .returnedStatus(itemDTO.getReturnedStatus())
				        .build();
			  status= StatusEnum.ITEM_UPDATED.value;
			  ItemsView = findByID(itemRepository.save(item).getId());
			}
		
		ItemResponceDTO itemResponceDTO = ItemResponceDTO.builder().itemsView(ItemsView).Message(status).build();
		return itemResponceDTO;
			
	}

	public List<ItemsView> getAllItem() {
		
		return itemViewRepository.findAllByOrderByIdDesc();
	}
   public List<ItemsView> getUnsoldItems() {
		return itemViewRepository.findByIsSoldAndReturnedStatusOrderByIdDesc(false,"0");
	}
	public Optional<ItemsView> findByID(Long id) {
		return itemViewRepository.findById(id);
	}
	
	public String deleteItemById(long id)
	{  
		boolean isInSales = salesService.checkIfItemIdExistsInSales(id);

		if (!isInSales) {
			itemRepository.deleteById(id);
			return StatusEnum.ITEM_DELETED.value;
		} else
			return StatusEnum.ITEM_EXIST_IN_SALES.value;

	}
	
}
