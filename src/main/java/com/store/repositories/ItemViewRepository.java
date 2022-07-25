package com.store.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.store.domain.Item;
import com.store.domain.ItemsView;


public interface ItemViewRepository  extends JpaRepository<ItemsView, Long> {
	
	  public List<ItemsView> findAllByOrderByIdDesc();
	  
}
