package com.example.AcademicWebApp.Repositories;

import com.example.AcademicWebApp.Models.StudentEnrollment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface StudentEnrollmentRepo extends JpaRepository<StudentEnrollment, String> {

    @Query("SELECT s from studentenrollment s where s.fid = ?1 and s.year = ?2")
    List<StudentEnrollment> getAllStudentEnrollmentsForFidAndYear(int fid, int year);

}
