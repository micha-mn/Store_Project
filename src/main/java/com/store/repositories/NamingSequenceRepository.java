package com.store.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.store.domain.NamingSequence;

public interface NamingSequenceRepository extends JpaRepository<NamingSequence, Long> {

	List<NamingSequence> findAll();
  
}
