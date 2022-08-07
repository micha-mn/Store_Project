package com.store.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.store.domain.Client;
import com.store.dto.ClientNameDTO;

public interface ClientRepository extends JpaRepository<Client, Long> {

	Optional<Client> findByName1IgnoreCaseAndName2IgnoreCase(String name1, String name2);

	List<Client> findAllByOrderByIdDesc();
	  
	@Query(" SELECT new com.store.dto.ClientNameDTO( id, concat(name1,' ', name2) as name ) FROM Client ORDER BY name asc")
	List<ClientNameDTO> getClientSortedByAlphabeticOrder();

}
