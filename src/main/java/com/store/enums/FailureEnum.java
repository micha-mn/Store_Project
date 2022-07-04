package com.store.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum FailureEnum {
	SAVE_SUPPLIER_FAILED(1),
	UPDATE_SUPPLIER_FAILED(2);
    private final int code;

}
