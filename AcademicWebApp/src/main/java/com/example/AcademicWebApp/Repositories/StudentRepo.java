package com.example.AcademicWebApp.Repositories;

import com.example.AcademicWebApp.Models.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StudentRepo extends JpaRepository<Student, String>
{
    @Query("from student where group1 = ?1")
    List<Student> findByFirstGroup(Integer group1);

    @Query("from student where group2 = ?1")
    List<Student> findBySecondGroup(Integer group2);

    @Query("from student where name = ?1")
    List<Student> findByName(String name);
}