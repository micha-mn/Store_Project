package com.store.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.store.domain.SalesView;

public interface SalesViewRepository  extends JpaRepository<SalesView, Long> {

	public Optional<SalesView> findById(Long id);

	public List<SalesView> findAllByOrderByIdDesc();
}
