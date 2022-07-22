package com.store.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.store.domain.Brand;

public interface BrandRepository extends JpaRepository<Brand, Long> {

	  public List<Brand> findAllByOrderByIdDesc();
      
}
