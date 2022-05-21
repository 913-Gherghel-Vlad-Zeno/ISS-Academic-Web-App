package com.example.AcademicWebApp.Controllers.RestAPIs;


import com.example.AcademicWebApp.Controllers.RestAPIs.Entities.*;
import com.example.AcademicWebApp.Models.Faculty;
import com.example.AcademicWebApp.Models.Group;
import com.example.AcademicWebApp.Models.Student;
import com.example.AcademicWebApp.Repositories.UsersRepo;
import com.example.AcademicWebApp.Services.StaffService;
import net.bytebuddy.asm.Advice;
import net.bytebuddy.implementation.bind.annotation.Origin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Locale;
import java.util.Objects;


@RestController
public class StaffController  {

    @Autowired
    private StaffService staffService;

//    @CrossOrigin(origins = "http://localhost:4200/")
//    @GetMapping("/staff/facultyGroups")
//    public List<FacultyGroups> getFacultyGroups(@CookieValue(name="username") String username) {
//        return staffService.getFacultiesWithGroups();
//    }
//
//    @CrossOrigin(origins = "http://localhost:4200/")
//    @GetMapping("/staff/facultyGroups/students")
//    public List<Student> getStudentsInGroup(@CookieValue(name="username") String username, @RequestBody Group group) {
//        return staffService.getStudentsFromGroup(group);
//    }

//    @CrossOrigin(origins = "http://localhost:4200/")
//    @GetMapping("/staff/facultyYears")
//    public List<FacultyYears> getFacultyYears(@CookieValue(name="username") String username) {
//        return staffService.getFacultiesWithYears();
//    }
//
//    @CrossOrigin(origins = "http://localhost:4200/")
//    @GetMapping("/staff/facultyYears/students")
//    public List<Student> getFacultyYears(@CookieValue(name="username") String username, @RequestBody FacultyYear facultyYear) {
//        return staffService.getStudentsFromFacultyYear(facultyYear);
//    }

    @CrossOrigin(origins = "http://localhost:4200/")
    @GetMapping("/staff/faculty/students")
    public List<StudentAverage> getStudentsFromFacultyYearGroup(@CookieValue(name="username") String username, @RequestBody StaffFilter staffFilter) {
        return staffService.getStudentsFromFacultyYearGroup(staffFilter);
    }

    @CrossOrigin(origins = "http://localhost:4200/")
    @GetMapping("/staff/faculty/getGroups")
    public List<Integer> getGroupsFromFaculties(@CookieValue(name="username") String username, @RequestBody FacultyYear facultyYear) {
        return staffService.getGroupsByFaculty(facultyYear);
    }

    @CrossOrigin(origins = "http://localhost:4200/")
    @PostMapping(value="/staff/founding/set")
    public Integer setScholarships(@CookieValue(name="username") String username, @RequestBody FoundingData foundingData) {
        return staffService.setScholarships(foundingData);
    }

    @CrossOrigin(origins = "http://localhost:4200/")
    @GetMapping(value="/staff/founding")
    public List<StudentGradeStaff> getStudentGrades(@CookieValue(name="username") String username) {
        return staffService.getStudentFounding();
    }

}
