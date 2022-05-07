package com.example.AcademicWebApp.Models;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity(name = "course")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Course {

    @Id
    @Column(name = "cid")
    private Integer cid;
    @Column(name = "name")
    private String name;
    @Column(name = "fid")
    private Integer fid;
    @Column(name = "semester")
    private Integer semester;

    /*
    @Override
    public String toString() {
        return this.username + ", " + this.name + ", " + this.group1 + ", " + this.group2;
    }
    */

}