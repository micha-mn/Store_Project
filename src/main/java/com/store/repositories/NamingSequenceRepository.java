package com.store.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.store.domain.NamingSequence;

public interface NamingSequenceRepository extends JpaRepository<NamingSequence, Long> {

     public List<NamingSequence> findAll();
     @Transactional
     @Modifying
     @Query(value = "update naming_sequence set supp_sequence = nextval('supp_sequence')",
       nativeQuery = true)
       void updateSupplierSequence();
}
