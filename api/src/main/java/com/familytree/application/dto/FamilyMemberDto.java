package com.familytree.application.dto;

import com.familytree.application.model.Gender;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FamilyMemberDto {

    private String name;

    private Gender gender;

    private Integer pid;

    private Integer mid;

    private Integer fid;

    private String nickName;

    private String familyId;

    private String img;

    private LocalDate birthDate;

    private LocalDate deathDate;

    private LocalDate anniversaryDate;

    private String address;

    private String mobileNo;

    private String whatsappNumber;

    private String achievements;

    private String profession;



}
