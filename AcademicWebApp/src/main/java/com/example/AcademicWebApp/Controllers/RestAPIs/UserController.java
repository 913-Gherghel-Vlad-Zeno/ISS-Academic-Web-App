package com.example.AcademicWebApp.Controllers.RestAPIs;


import com.example.AcademicWebApp.Repositories.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import java.util.Locale;
import java.util.Objects;

@RestController
public class UserController {

    @Autowired
    UsersRepo usersRepo;

    @CrossOrigin(origins = "http://localhost:4200/")

    @GetMapping("/user/{username}")
    public RedirectView redirectWithUsingRedirectView(RedirectAttributes attributes, @PathVariable("username") String username) {

        UserEntity user = getUser(username);

        attributes.addFlashAttribute("flashAttribute", user.getRole());
        attributes.addAttribute("role", user.getRole());
        return new RedirectView(username);
    }


    //@GetMapping("/user/{username}")
    public UserEntity getUser(String username){

        if(usersRepo.existsById(username)){
            return new UserEntity(usersRepo.getById(username).getRole().toString());
        }
        else{
            return new UserEntity("null");
        }

    }




}
