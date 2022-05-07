package com.example.AcademicWebApp.Models;

import lombok.*;

import javax.persistence.*;

@Data
@Entity(name = "grade")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Grade {

    @Column(name = "gradevalue")
    private Integer gradevalue;
    @Column(name = "username")
    private String username;
    @Column
    private String course;

    @Column(name = "cid")
    private Integer cid;
    @Column
    @Id
    @GeneratedValue
    private Integer gid;
    /*
    @Override
    public String toString() {
        return this.username + ", " + this.name + ", " + this.group1 + ", " + this.group2;
    }
    */

}