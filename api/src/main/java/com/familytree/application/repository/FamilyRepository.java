package com.familytree.application.repository;


import com.familytree.application.model.FamilyMember;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FamilyRepository extends JpaRepository<FamilyMember, Integer> {

}
