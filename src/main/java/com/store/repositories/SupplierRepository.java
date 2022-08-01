package com.store.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.store.domain.Supplier;

public interface SupplierRepository extends JpaRepository<Supplier, Long> {
   public List<Supplier> findAllByOrderByIdDesc();
   Optional<Supplier> findByFirstNameIgnoreCaseAndLastNameIgnoreCase(String firstName, String lastName);
   public Optional<Supplier> findBySuppCode(String supplierCode);
}
