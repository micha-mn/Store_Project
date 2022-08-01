package com.store.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.domain.Item;
import com.store.domain.ItemsView;
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
	    		        .build();
	     status= StatusEnum.ITEM_SAVED.value;
	     ItemsView = findByID(itemRepository.save(item).getId());
	     namingSequenceservice.updateItemSequence();
		}
		else 
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
	public Optional<ItemsView> findByID(Long id) {
		return itemViewRepository.findById(id);
	}
	
	public String deleteItemById(long id)
	{
		itemRepository.deleteById(id);
		return StatusEnum.ITEM_DELETED.value;
	}
	
}
