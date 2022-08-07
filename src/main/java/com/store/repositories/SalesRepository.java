package com.store.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.store.domain.Sales;


public interface SalesRepository extends JpaRepository<Sales, Long> {

	boolean existsByItemId(String valueOf);

	boolean existsByClientId(String valueOf);

}
