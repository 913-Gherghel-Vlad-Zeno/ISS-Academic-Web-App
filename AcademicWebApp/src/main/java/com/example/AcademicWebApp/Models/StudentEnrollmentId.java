package com.example.AcademicWebApp.Models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StudentEnrollmentId implements Serializable {

    private String username;
    private Integer fid;
    private Integer year;


}
