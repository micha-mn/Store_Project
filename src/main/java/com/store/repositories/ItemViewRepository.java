package com.store.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.store.domain.ItemsView;


public interface ItemViewRepository  extends JpaRepository<ItemsView, Long> {
	
	  public List<ItemsView> findAllByOrderByIdDesc();
	  public Optional<ItemsView> findById(Long id);
	  public List<ItemsView> findByIsSoldFalseOrderByIdDesc();
	  public List<ItemsView> findByIsSoldAndReturnedStatusOrderByIdDesc(boolean b, String string);
	  
	  
}
