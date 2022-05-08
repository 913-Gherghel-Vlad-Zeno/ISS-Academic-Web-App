package com.example.AcademicWebApp.Repositories;

import com.example.AcademicWebApp.Models.StudentEnrollment;
import com.example.AcademicWebApp.Models.StudentEnrollmentId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentEnrollmentRepo extends JpaRepository<StudentEnrollment, StudentEnrollmentId> {

    List<StudentEnrollment> findAllByFidAndYear(Integer fid, Integer year);
}
