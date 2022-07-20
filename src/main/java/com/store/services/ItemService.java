package com.store.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.domain.Item;
import com.store.dto.ItemDTO;
import com.store.enums.StatusEnum;
import com.store.repositories.ItemRepository;
import com.store.utils.CommonUtils;

import jakarta.validation.Valid;

@Service
public class ItemService {
	@Autowired
	ItemRepository itemRepository;
	@Autowired
	CommonUtils commonUtils;
	
	public String SaveItem(@Valid ItemDTO itemDTO) {
		Item item = null;
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
			}
		
		itemRepository.save(item);
		
		return status;
	}

	public List<Item> getAllItem() {
		
		return itemRepository.findAllByOrderByIdDesc();
	}
	public String deleteItemById(long id)
	{
		itemRepository.deleteById(id);
		return StatusEnum.ITEM_DELETED.value;
	}
}
