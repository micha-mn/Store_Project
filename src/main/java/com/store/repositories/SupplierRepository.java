package com.store.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.store.domain.Supplier;

public interface SupplierRepository extends JpaRepository<Supplier, Long> {
  public List<Supplier> findAll();
  Optional<Supplier> findByFirstNameAndLastName(String firstName, String lastName);
  @Transactional
  @Modifying
  @Query(value ="UPDATE supplier "
  		+ "	SET first_name=:firstName, last_name=:lastName, address=:address, phone=:phone, instagram=:instagram "
  		+ "	WHERE id=:id",
        nativeQuery = true)
  void updateSupplierById(@Param("firstName") String firstName,
		  				  @Param("lastName") String lastName,
		  				  @Param("address") String address,
		  				  @Param("phone") String phone,
		  				  @Param("instagram") String instagram,
		  				  @Param("id") Long id);
  
}
