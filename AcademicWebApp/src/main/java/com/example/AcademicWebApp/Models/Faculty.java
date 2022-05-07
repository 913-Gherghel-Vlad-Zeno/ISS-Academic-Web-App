package com.example.AcademicWebApp.Models;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity(name = "faculty")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Faculty {

    @Id
    @Column(name = "fid")
    private Integer fid;
    @Column(name = "name")
    private String name;
    @Column(name = "noyears")
    private Integer noyears;



    /*
    @Override
    public String toString() {
        return this.username + ", " + this.name + ", " + this.group1 + ", " + this.group2;
    }
    */

}