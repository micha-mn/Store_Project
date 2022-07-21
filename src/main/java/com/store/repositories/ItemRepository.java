package com.store.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.store.domain.Item;


public interface ItemRepository  extends JpaRepository<Item, Long> {
	  public List<Item> findAllByOrderByIdDesc();

	  public Item findById(long id);
}
