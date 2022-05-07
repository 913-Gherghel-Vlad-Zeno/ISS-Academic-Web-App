package com.example.AcademicWebApp.Controllers.RestAPIs;


import com.example.AcademicWebApp.Repositories.UsersRepo;
import net.bytebuddy.asm.Advice;
import net.bytebuddy.implementation.bind.annotation.Origin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletRequest;
import java.util.Locale;
import java.util.Objects;


@RestController
@RequestMapping("/")
public class TeacherController  {

    //@Autowired
    //UsersRepo usersRepo;

    //@CrossOrigin(origins = "http://localhost:4200/")

    @GetMapping("/{username}/Teacher")
    public UserEntity getStudent(@PathVariable("username") String username, HttpServletRequest request)
    {
        //return "Hello, " + user. + "! You are a " + request.getAttribute("role");
        return (UserEntity) request.getAttribute("userEntity");
    }




}
