package com.store.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.store.domain.Brand;
import com.store.domain.Supplier;

public interface BrandRepository extends JpaRepository<Brand, Long> {

	  public List<Brand> findAllByOrderByIdDesc();

	   public Optional<Brand> findByNameEnIgnoreCase(String nameEn);
      
}
