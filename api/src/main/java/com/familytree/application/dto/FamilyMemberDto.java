package com.familytree.application.dto;

import com.familytree.application.model.Gender;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FamilyMemberDto {

    private String name;

    private Gender gender;

    private Integer pid; //PartnerId

    private Integer mid; //MotherId

    private Integer fid; //FatherId

    private String img;

}
