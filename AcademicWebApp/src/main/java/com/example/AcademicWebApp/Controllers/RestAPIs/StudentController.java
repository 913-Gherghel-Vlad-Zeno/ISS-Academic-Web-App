package com.example.AcademicWebApp.Controllers.RestAPIs;


import com.example.AcademicWebApp.Models.*;
import com.example.AcademicWebApp.Repositories.StudentRepo;
import com.example.AcademicWebApp.Repositories.UsersRepo;
import com.example.AcademicWebApp.Services.StudentService;
import lombok.RequiredArgsConstructor;
import net.bytebuddy.asm.Advice;
import net.bytebuddy.implementation.bind.annotation.Origin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Locale;
import java.util.Objects;


@RestController
@RequiredArgsConstructor
//@RequestMapping("/")
public class StudentController {

    @Autowired
    private StudentRepo studentRepo;
    @Autowired
    private StudentService studentService;

    //@CrossOrigin(origins = "http://localhost:4200/")

    @GetMapping("/{username}/Student")
    public UserEntity getStudent(@PathVariable("username") String username, HttpServletRequest request)
    {
        //return "Hello, " + user. + "! You are a " + request.getAttribute("role");
        return (UserEntity) request.getAttribute("userEntity");
    }

    @RequestMapping("/students")
    public String getStudents()
    {
        return studentRepo.findAll().toString();
    }

    @GetMapping("/student/{username}")
    public String getStudentByUsername(@PathVariable("username") String username)
    {
        return studentRepo.findById(username).toString();
    }

    @GetMapping("/student/group1/{group1}")
    public List<Student> getStudentsByFirstGroup(@PathVariable("group1") String group1)
    {
        return studentRepo.findAllByGroup1(Integer.valueOf(group1));
    }

    @GetMapping("/student/group2/{group2}")
    public String getStudentsBySecondGroup(@PathVariable("group2") String group2)
    {
        return studentRepo.findBySecondGroup(Integer.valueOf(group2)).toString();
    }

    @GetMapping("/student/name/{name}")
    public List<Student> getStudentByName(@PathVariable("name") String name)
    {
        return studentRepo.findByName(name);
    }

    // (✿◠‿◠)
    @PostMapping(value = "/student/add",
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public Student addStudent(@RequestBody StudentData student)
    {

        return studentService.saveStudent(student);
    }



    @GetMapping("/student/getCoursesFirstGroup")
    public List<Course> getCoursesForStudentFirstGroup(@CookieValue(name = "username") String username)
    {
        return studentService.getCoursesForFirstGroup(username);

    }

    @GetMapping("/student/getCoursesSecondGroup")
    public List<Course> getCoursesForStudentSecondGroup(@CookieValue(name = "username") String username)
    {
        return studentService.getCoursesForSecondGroup(username);

    }

    //DONE TODO #1 get api -  make api to get optionals based on faculty, year
    @GetMapping("/student/getOptionalsByFacultyAndYear")
    public List<Course> getOptionalsByFacultyAndYear(@RequestBody OptionalCourseData data)
    {
        return studentService.getOptionalsBasedOnFacultyAndYear(data);
    }

    //DONE TODO #2 get api - make api to get all faculties (as faculties)
    @GetMapping("/student/getFaculties")
    public List<Faculty> getFacultiesForStudent()
    {
        return studentService.getFaculties();
    }


    //DONE TODO #3 post api - list of courses, 100% optionals
    //DONE TODO #4 service stuff - insert in optional_course_enrollment data based on the student and the list from #3
    @PostMapping(value="/student/sendOptionalsPreferences",
            consumes = "application/json",
            produces = "application/json")
    public List<OptionalCourseEnrollment> sendOptionalsPreferences(@RequestBody List<Course> courses, @CookieValue(name = "username") String username)
    {
        return studentService.sendOptionalsPreferences(courses, username);
    }


    //TODO #5 get api - return list of all courses in which the student is enrolled (the first part is already implemented above these TODOS, hutsu) , including the optional one




    //DONE TODO #n get api - get faculties+years that the student is enrolled in, based on username(cookie)
    @GetMapping("/student/getFacultiesAndYears")
    public List<FacultyAndYearData> getFacultiesAndYears(@CookieValue(name = "username") String username)
    {
        return studentService.getFacultiesAndYears(username);

    }
    //TODO #n+1 get api - get courses+grades based on faculty and year (plus username from cookie) + (optional course + grade)
    //TODO DEADLINE 21 MAY 13:00
    //(✿◠‿◠)


    public String sayHello(UserEntity user)
    {
        return "You are a " + user.getRole() + ". This should be that page where you can edit your profile and etc.";
    }



}
