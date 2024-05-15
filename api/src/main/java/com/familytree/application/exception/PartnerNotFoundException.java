package com.familytree.application.exception;

public class PartnerNotFoundException extends RuntimeException {
    public PartnerNotFoundException(String exceptionMessage) {
        super(exceptionMessage);
    }
}
