package com.store.enums;

public enum StatusEnum {
    SUPPLIER_SAVED("New Supplier has been added"),
    SUPPLIER_EXIST("Supplier with given Name1 and Name2 already exist"),
    SUPPLIER_CODE_EXIST("Supplier Code already exist"),
    SUPPLIER_UPDATED("Supplier has been updated"),
    SUPPLIER_DELETED("success"),
    SUPPLIER_EXIST_IN_ITEM("The selected Supplier cannot be deleted since it is connected to an item."),
    CLIENT_SAVED("New Client has been added"),
    CLIENT_EXIST("Client with given Name1 and Name2 already exist"),
    CLIENT_UPDATED("Client has been updated"),
    CLIENT_DELETED("success"),
    CLIENT_EXIST_IN_SALES("The selected client cannot be deleted since it is connected to a sale."),
    ITEM_SAVED("New Item has been added"),
    ITEM_UPDATED("Item has been updated"),
    ITEM_RETURN_FAILED("failed"),
    ITEM_DELETED("success"),
    ITEM_EXIST_IN_SALES("The selected item cannot be deleted since it is connected to a sale."),
    BRAND_SAVED("New Brand has been added"),
    BRAND_EXIST("Brand with given Name already exist"),
    BRAND_DELETED("success"),
    BRAND_EXIST_IN_ITEM("The selected brand cannot be deleted since it is connected to an item."),
    SALES_SAVED("New Sale has been added"),
    SALES_UPDATED("Sale has been updated"),
    SALES_DELETED("success");

    public final String value;

    StatusEnum(String value) {
        this.value = value;
    }
    
}