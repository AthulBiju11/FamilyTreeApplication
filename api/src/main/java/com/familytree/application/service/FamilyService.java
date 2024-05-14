package com.familytree.application.service;

import com.familytree.application.dto.FamilyMemberDto;
import com.familytree.application.model.FamilyMember;
import com.familytree.application.repository.FamilyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FamilyService {

    @Autowired
    private FamilyRepository repository;

    public ResponseEntity<List<FamilyMember>> retrieveAllFamilyMembers() {
        return  ResponseEntity.ok(repository.findAll());
    }


    public ResponseEntity<FamilyMember> addNewMember(FamilyMemberDto newMember) {

        FamilyMember member = new FamilyMember();
        member.setName(newMember.getName());
        member.setFid(newMember.getFid());
        member.setMid(newMember.getMid());
        if (newMember.getPid() == null){
            List<Integer> emptyList = new ArrayList<>();
            member.setPids(emptyList);
        }else{
            member.setPids(List.of(newMember.getPid()));
        }

        member.setGender(newMember.getGender());

        return ResponseEntity.ok(repository.save(member));

    }
}
