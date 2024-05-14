package com.familytree.application.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "family")
public class FamilyMember {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer mid; //MotherId

    private Integer fid; //FatherId

    private List<Integer> pids; //ParentId

    private String name;

    @Enumerated(value = EnumType.STRING)
    private Gender gender;

    private String img;





}
