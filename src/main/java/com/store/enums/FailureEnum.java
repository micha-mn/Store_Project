package com.store.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum FailureEnum {
	SAVE_SUPPLIER_FAILED(1),
	UPDATE_SUPPLIER_FAILED(2),
	SAVE_CLIENT_FAILED(3),
	UPDATE_CLIENT_FAILED(4),
	SAVE_BRAND_FAILED(5),
	SAVE_ITEM_FAILED(6),
	UPDATE_ITEM_FAILED(7),
	INVALID_REPORT_INFO(8),
	SAVE_SALES_FAILED(9),
	UPDATE_SALES_FAILED(10);
	
    private final int code;

}
