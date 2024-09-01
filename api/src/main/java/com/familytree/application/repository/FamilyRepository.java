package com.familytree.application.repository;


import com.familytree.application.model.FamilyMember;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FamilyRepository extends JpaRepository<FamilyMember, Integer> {
    List<FamilyMember> findByUNID(int unid);
}
