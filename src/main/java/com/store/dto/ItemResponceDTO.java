package com.store.dto;

import java.util.Optional;

import com.store.domain.ItemsView;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class ItemResponceDTO {
	 private Optional<ItemsView> itemsView;
	 private String Message;
}
