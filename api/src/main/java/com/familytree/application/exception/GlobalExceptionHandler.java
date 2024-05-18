package com.familytree.application.exception;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(PartnerNotFoundException.class)
    public ResponseEntity<String> partnerNotFoundExceptionHandler(PartnerNotFoundException ex){
        return ResponseEntity.ok("Partner was not found, Make sure to create the correct partner next time");
    }

    @ExceptionHandler(FamilyMemberNotFoundException.class)
    public ResponseEntity<String> familyMemberNotFoundExceptionHandler(PartnerNotFoundException ex){
        return ResponseEntity.ok("Family Member with the corresponding id not found");
    }


}
