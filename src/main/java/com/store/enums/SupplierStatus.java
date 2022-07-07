package com.store.enums;

public enum SupplierStatus {
    SAVED("New Supplier has been added"),
    EXIST("Supplier with given Name1 and Name2 already exist"),
    UPDATED("Supplier has been updated"),
    DELETED("Supplier has been deleted");

    public final String value;

    SupplierStatus(String value) {
        this.value = value;
    }
    
}