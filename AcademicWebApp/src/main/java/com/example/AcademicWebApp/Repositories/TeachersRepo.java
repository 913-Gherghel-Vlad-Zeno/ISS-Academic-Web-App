package com.example.AcademicWebApp.Repositories;

import com.example.AcademicWebApp.Models.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeachersRepo extends JpaRepository<Teacher, String> {
}
