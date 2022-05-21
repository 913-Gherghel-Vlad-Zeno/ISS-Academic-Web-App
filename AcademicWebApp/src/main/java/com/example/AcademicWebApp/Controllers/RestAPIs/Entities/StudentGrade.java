package com.example.AcademicWebApp.Controllers.RestAPIs.Entities;

import lombok.*;

@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class StudentGrade {
    private String username;
    private int grade;
}
