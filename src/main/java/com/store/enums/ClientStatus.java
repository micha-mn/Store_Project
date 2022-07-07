package com.store.enums;

public enum ClientStatus {
    SAVED("New Client has been added"),
    EXIST("Client with given Name1 and Name2 already exist"),
    UPDATED("Client has been updated"),
    DELETED("Client has been deleted");

    public final String value;

    ClientStatus(String value) {
        this.value = value;
    }
    
}