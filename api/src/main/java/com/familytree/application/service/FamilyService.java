package com.familytree.application.service;

import com.familytree.application.dto.FamilyMemberDto;
import com.familytree.application.model.FamilyMember;
import com.familytree.application.repository.FamilyRepository;
import com.familytree.application.exception.FamilyMemberNotFoundException;
import com.familytree.application.exception.PartnerNotFoundException;
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
        return ResponseEntity.ok(repository.findAll());
    }

    public ResponseEntity<FamilyMember> addNewMember(FamilyMemberDto newMember) {
        FamilyMember member = new FamilyMember();
        member.setName(newMember.getName());
        member.setFid(newMember.getFid());
        member.setMid(newMember.getMid());
        member.setGender(newMember.getGender());
        member.setImg(newMember.getImg());
        member.setBirthDate(newMember.getBirthDate());
        member.setNickName(newMember.getNickName());
        member.setFamilyId(newMember.getFamilyId());
        member.setDeathDate(newMember.getDeathDate());
        member.setAddress(newMember.getAddress());
        member.setMobileNo(newMember.getMobileNo());
        member.setAnniversaryDate(newMember.getAnniversaryDate());
        member.setWhatsappNumber(newMember.getWhatsappNumber());
        member.setAchievements(newMember.getAchievements());
        member.setProfession(newMember.getProfession());
        if (newMember.getPid() == null) {
            List<Integer> emptyList = new ArrayList<>();
            member.setPids(emptyList);
            return ResponseEntity.ok(repository.save(member));
        } else {
            member.setPids(List.of(newMember.getPid()));

            FamilyMember savedMember = new FamilyMember();
            savedMember = repository.save(member);

            FamilyMember partnerMember = new FamilyMember();
            partnerMember = repository.findById(newMember.getPid()).orElseThrow(() -> new PartnerNotFoundException("Record has been created but partner member was not found. Please make sure to mention the correct PartnerId while creating the partner"));
            partnerMember.setPids(List.of(savedMember.getId()));
            repository.save(partnerMember);

            return ResponseEntity.ok(savedMember);
        }
    }

    public ResponseEntity<FamilyMember> updateFamilyMember(Integer id, FamilyMemberDto newMember) {
        FamilyMember member = repository.findById(id).orElseThrow(() -> new FamilyMemberNotFoundException("Family member with corresponding id not found"));
        member.setName(newMember.getName());
        member.setFid(newMember.getFid());
        member.setMid(newMember.getMid());
        member.setGender(newMember.getGender());
        member.setImg(newMember.getImg());
        member.setBirthDate(newMember.getBirthDate());
        member.setNickName(newMember.getNickName());
        member.setFamilyId(newMember.getFamilyId());
        member.setDeathDate(newMember.getDeathDate());
        member.setAddress(newMember.getAddress());
        member.setMobileNo(newMember.getMobileNo());
        member.setAnniversaryDate(newMember.getAnniversaryDate());
        member.setWhatsappNumber(newMember.getWhatsappNumber());
        member.setAchievements(newMember.getAchievements());
        member.setProfession(newMember.getProfession());
        if (newMember.getPid() == null) {
            List<Integer> emptyList = new ArrayList<>();
            member.setPids(emptyList);
            return ResponseEntity.ok(repository.save(member));
        } else {
            member.setPids(List.of(newMember.getPid()));

            FamilyMember savedMember = new FamilyMember();
            savedMember = repository.save(member);

            FamilyMember partnerMember = new FamilyMember();
            partnerMember = repository.findById(newMember.getPid()).orElseThrow(() -> new PartnerNotFoundException("Record has been created but partner member was not found. Please make sure to mention the correct PartnerId while creating the partner"));
            partnerMember.setPids(List.of(savedMember.getId()));
            repository.save(partnerMember);

            return ResponseEntity.ok(savedMember);
        }
    }

    public ResponseEntity<String> deleteFamilyMember(Integer id) {
        repository.deleteById(id);
        return ResponseEntity.ok("The Family Member has been deleted");
    }

    public ResponseEntity<List<FamilyMember>> getFamilyMembersByUNID(Integer id) {
        return ResponseEntity.ok(repository.findByUNID(id));
    }
}
