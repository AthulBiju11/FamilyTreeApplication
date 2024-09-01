package com.familytree.application.controller;


import com.familytree.application.dto.FamilyMemberDto;
import com.familytree.application.model.FamilyMember;
import com.familytree.application.service.FamilyService;
import org.apache.coyote.Response;
import org.hibernate.type.descriptor.jdbc.JdbcTypeFamilyInformation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FamilyController {

    @Autowired
    public FamilyService service;

    @GetMapping("/family/all")
    public ResponseEntity<List<FamilyMember>> fetchAllFamilyMembers () {
        return service.retrieveAllFamilyMembers();
    }

    @GetMapping("/family/unid/{id}")
    public ResponseEntity<List<FamilyMember>> fetchFamilyMembersByUNID (@PathVariable Integer id){
        return service.getFamilyMembersByUNID(id);
    }

    @PostMapping("/family/add")
    public ResponseEntity<FamilyMember> addNewFamilyMember (@RequestBody FamilyMemberDto newMember) {
        return service.addNewMember(newMember);
    }

    @PostMapping("/family/update/{id}")
    public ResponseEntity<FamilyMember> updateFamilyMember (@PathVariable Integer id, @RequestBody FamilyMemberDto newMember) {
        return service.updateFamilyMember(id,newMember);
    }

    @DeleteMapping("/family/delete/{id}")
    public ResponseEntity<String> deleteFamilyMember (@PathVariable Integer id) {
        return service.deleteFamilyMember(id);
    }

}
