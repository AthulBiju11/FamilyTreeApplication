package com.familytree.application.exception;

public class FamilyMemberNotFoundException extends RuntimeException{

    public FamilyMemberNotFoundException(String exceptionMessage) {
        super(exceptionMessage);
    }

}
