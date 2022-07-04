package com.store.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum NamingSequenceEnum {
	SEQUENCE_SUPPLIER("SEQUENCE_SUPPLIER"),
	SEQUENCE_ITEM("SEQUENCE_ITEM");
    private final String sequenceName;
}
