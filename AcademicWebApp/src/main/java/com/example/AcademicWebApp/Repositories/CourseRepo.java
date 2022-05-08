package com.example.AcademicWebApp.Repositories;

import com.example.AcademicWebApp.Models.Course;
import com.example.AcademicWebApp.Models.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface CourseRepo extends JpaRepository<Course, String>
{
    @Query("from course where fid=?1 and year=?2")
    List<Course> findCoursesByFidAndYear(Integer fid, Integer year);


}