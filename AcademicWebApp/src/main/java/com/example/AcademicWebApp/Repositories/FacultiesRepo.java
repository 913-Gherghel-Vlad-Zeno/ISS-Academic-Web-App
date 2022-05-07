package com.example.AcademicWebApp.Repositories;

import com.example.AcademicWebApp.Models.Faculty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FacultiesRepo extends JpaRepository<Faculty, Integer> {

    @Query("SELECT f FROM faculty f WHERE f.chief = ?1")
    public List<Faculty> getFacultyForChief(String username);
}
