package com.familytree.application.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
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

    private String nickName;

    private String familyId;

    @Enumerated(value = EnumType.STRING)
    private Gender gender;

    private String img;

    private LocalDate birthDate;

    private LocalDate deathDate;

    private LocalDate anniversaryDate;

    private String address;

    private String mobileNo;

    private Integer UNID;

    private String whatsappNumber;

    private String achievements;

    private String profession;


}
