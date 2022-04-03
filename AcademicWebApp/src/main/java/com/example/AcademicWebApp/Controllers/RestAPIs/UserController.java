package com.example.AcademicWebApp.Controllers.RestAPIs;


import com.example.AcademicWebApp.Repositories.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Locale;

@RestController
public class UserController {

    @Autowired
    UsersRepo usersRepo;

    @GetMapping("/user/{username}")
    public String getUser(@PathVariable("username") String username){

        if(usersRepo.existsById(username)){
            return usersRepo.getById(username).getRole().toString();
        }
        else{
            return "null";
        }

    }




}
