package com.store.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.store.domain.Item;


public interface ItemRepository  extends JpaRepository<Item, Long> {
	
	  public Item findById(long id);

	  public boolean existsByBrandId(String brandId);

	  public boolean existsBySuppCode(String suppCode);
	  
	 @Transactional
     @Modifying
     @Query(value = "update items set is_sold = true where id = CAST (:itemId AS INTEGER) ",
       nativeQuery = true)
	  public void updateSoldItem(@Param("itemId") String itemId);
}
