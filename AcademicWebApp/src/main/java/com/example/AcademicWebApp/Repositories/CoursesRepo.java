package com.example.AcademicWebApp.Repositories;

import com.example.AcademicWebApp.Models.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CoursesRepo extends JpaRepository<Course, Integer> {

}
