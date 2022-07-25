package com.store.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import com.store.domain.Item;


public interface ItemRepository  extends JpaRepository<Item, Long> {
	
	  public Item findById(long id);
}
