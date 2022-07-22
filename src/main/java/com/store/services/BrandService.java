package com.store.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.domain.Brand;
import com.store.dto.BrandDTO;
import com.store.repositories.BrandRepository;

@Service
public class BrandService {
	@Autowired
	BrandRepository brandRepository;
	
	public Long saveBrand(BrandDTO brandDTO) {
		Brand brand = Brand.builder().nameEn(brandDTO.getNameEn()).build();
		return brandRepository.save(brand).getId();
	}

	public List<Brand> getAllBrands() {
	
		return brandRepository.findAllByOrderByIdDesc();	
	}
	
}
