package com.store.enums;

public enum StatusEnum {
    SUPPLIER_SAVED("New Supplier has been added"),
    SUPPLIER_EXIST("Supplier with given Name1 and Name2 already exist"),
    SUPPLIER_CODE_EXIST("Supplier Code already exist"),
    SUPPLIER_UPDATED("Supplier has been updated"),
    SUPPLIER_DELETED("Supplier has been deleted"),
    CLIENT_SAVED("New Client has been added"),
    CLIENT_EXIST("Client with given Name1 and Name2 already exist"),
    CLIENT_UPDATED("Client has been updated"),
    CLIENT_DELETED("Client has been deleted"),
    ITEM_SAVED("New Item has been added"),
    ITEM_UPDATED("Item has been updated"),
    ITEM_DELETED("Item has been deleted"),
    BRAND_SAVED("New Brand has been added"),
    BRAND_EXIST("Brand with given Name already exist");

    public final String value;

    StatusEnum(String value) {
        this.value = value;
    }
    
}