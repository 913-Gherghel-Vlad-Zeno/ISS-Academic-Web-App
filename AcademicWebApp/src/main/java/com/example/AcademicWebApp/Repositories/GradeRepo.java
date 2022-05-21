package com.example.AcademicWebApp.Repositories;

import com.example.AcademicWebApp.Models.Grade;
import com.example.AcademicWebApp.Models.GradeId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GradeRepo extends JpaRepository<Grade, GradeId> {

    @Query("from grade where username = ?1")
    List<Grade> getAllGradesByUsername(String username);

}