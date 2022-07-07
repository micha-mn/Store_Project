package com.store.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.store.domain.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {

	Optional<Client> findByName1AndName2(String name1, String name2);

	List<Client> findAllByOrderByIdDesc();

}
