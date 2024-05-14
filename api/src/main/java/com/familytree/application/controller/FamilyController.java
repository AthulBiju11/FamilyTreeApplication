package com.familytree.application.controller;


import com.familytree.application.dto.FamilyMemberDto;
import com.familytree.application.model.FamilyMember;
import com.familytree.application.service.FamilyService;
import org.hibernate.type.descriptor.jdbc.JdbcTypeFamilyInformation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FamilyController {

    @Autowired
    public FamilyService service;

    @GetMapping("/family/all")
    public ResponseEntity<List<FamilyMember>> fetchAllFamilyMembers () {
        return service.retrieveAllFamilyMembers();
    }

    @PostMapping("/family/add")
    public ResponseEntity<FamilyMember> addNewFamilyMember (@RequestBody FamilyMemberDto newMember) {
        return service.addNewMember(newMember);
    }



}
