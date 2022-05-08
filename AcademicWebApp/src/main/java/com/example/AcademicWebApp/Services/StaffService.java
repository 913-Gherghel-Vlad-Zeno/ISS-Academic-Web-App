package com.example.AcademicWebApp.Services;

import com.example.AcademicWebApp.Controllers.RestAPIs.Entities.FacultyGroups;
import com.example.AcademicWebApp.Controllers.RestAPIs.Entities.FacultyYear;
import com.example.AcademicWebApp.Controllers.RestAPIs.Entities.FacultyYears;
import com.example.AcademicWebApp.Models.*;
import com.example.AcademicWebApp.Repositories.*;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
@Service
public class StaffService {

    @Autowired
    private StudentRepo studentRepo;

    @Autowired
    private GradeRepo gradeRepo;

    @Autowired
    private FacultyRepo facultyRepo;

    @Autowired
    private GroupRepo groupRepo;

    @Autowired
    private StudentEnrollmentRepo studentEnrollmentRepo;

    public List<FacultyGroups> getFacultiesWithGroups() {
        List<Faculty> faculties = facultyRepo.findAll();
        List<FacultyGroups> facultyGroups = new ArrayList<>();

        for (Faculty faculty : faculties) {
            List<Group> groups = groupRepo.findAllByFaculty(faculty.getFid());

            FacultyGroups facultyGroup = new FacultyGroups(faculty.getName(), groups);
            facultyGroups.add(facultyGroup);
        }

        return facultyGroups;
    }

    private int averageComparator(Student s1, Student s2) {
        List<Grade> grades1 = new ArrayList<>();
        List<Grade> grades2 = new ArrayList<>();

        grades1 = gradeRepo.findAllByUsername(s1.getUsername());
        grades2 = gradeRepo.findAllByUsername(s2.getUsername());

//        try{
//            grades1 = gradeRepo.findAllByUsername(s1.getUsername());
//        }
//        catch (Exception ex) {
//            return 1;
//        }
//
//        try {
//            grades2 = gradeRepo.findAllByUsername(s2.getUsername());
//        }
//        catch (Exception ex) {
//            return -1;
//        }

        int avg1 = 0, avg2 = 0;
        for (Grade grade: grades1) {
            avg1 += grade.getGradevalue();
        }
        avg1 /= grades1.size();

        for (Grade grade: grades2) {
            avg2 += grade.getGradevalue();
        }
        avg2 /= grades2.size();

        if (avg1 == avg2) {
            return 0;
        }
        else if (avg1 < avg2) {
            return 1;
        }
        else{
            return -1;
        }
    }

    public List<Student> getStudentsFromGroup(Group group) {
        List<Student> students = new ArrayList<>();

        List<Student> fromGroup1 = studentRepo.findAllByGroup1(group.getGid());
        List<Student> fromGroup2 = studentRepo.findAllByGroup2(group.getGid());

        students.addAll(fromGroup1);
        students.addAll(fromGroup2);

        System.out.println(students);

        students.sort(this::averageComparator);

        System.out.println(students);

        return students;
    }

    public List<FacultyYears> getFacultiesWithYears() {
        List<FacultyYears> facultyYears = new ArrayList<>();
        List<Faculty> faculties = facultyRepo.findAll();

        for (Faculty faculty: faculties){
            FacultyYears facultyYears1 = new FacultyYears();
            facultyYears1.setFacultyName(faculty.getName());

            List<Integer> years = new ArrayList<>();
            for (int i = 1; i <= faculty.getNoyears(); i++) {
                years.add(i);
            }
            facultyYears1.setYears(years);

            facultyYears.add(facultyYears1);
        }

        return facultyYears;
    }

    public List<Student> getStudentsFromFacultyYear(FacultyYear facultyYear) {
        List<Student> students = new ArrayList<>();

         List<StudentEnrollment> studentEnrollments = studentEnrollmentRepo.findAllByFidAndYear(
                facultyRepo.findFidByName(facultyYear.getFacultyName()), facultyYear.getYear());

        for (StudentEnrollment studentEnrollment: studentEnrollments) {
            students.add(studentRepo.findById(studentEnrollment.getUsername()).get());
        }

        students.sort(this::averageComparator);

        return students;
    }

}
