package com.store.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.domain.Brand;
import com.store.dto.BrandDTO;
import com.store.dto.BrandDTOResponce;
import com.store.enums.StatusEnum;
import com.store.repositories.BrandRepository;

@Service
public class BrandService {
	@Autowired
	BrandRepository brandRepository;
	
	@Autowired
	ItemService itemService;
	
	public boolean checkifBrandexists(BrandDTO brandDTO) {
		Optional<Brand> isBrand = brandRepository.findByNameEnIgnoreCase(brandDTO.getNameEn());
		if (isBrand.isPresent())
			return true;
		else
			return false;
	}
	
	public BrandDTOResponce saveBrand(BrandDTO brandDTO) {
		boolean exists = checkifBrandexists(brandDTO);
		Brand brand = null;
		String message=null;
		
			if (!exists)
			{ 
				if(brandDTO.getAction().equalsIgnoreCase("save"))
				brand = Brand.builder().nameEn(brandDTO.getNameEn()).build();
				else 
				 brand = Brand.builder().id(brandDTO.getId()).nameEn(brandDTO.getNameEn()).build();
				
	          brandRepository.save(brand);
	          message = StatusEnum.BRAND_SAVED.value;
			}
			else
			 message = StatusEnum.BRAND_EXIST.value;
		
		BrandDTOResponce brandDTOResponce = BrandDTOResponce.builder().brand(brand).Message(message).build();
		return  brandDTOResponce;
	}

	public List<Brand> getAllBrands() {
	
		return brandRepository.findAllByOrderByIdDesc();	
	}
	public String deleteBrandById(long id)
	{   boolean isInItem =  itemService.checkifBrandIdExistsInItem(id);
		if(!isInItem)
			{brandRepository.deleteById(id);
			return StatusEnum.BRAND_DELETED.value;
			}
		else 
			return StatusEnum.BRAND_EXIST_IN_ITEM.value;
	}
	
	
}
