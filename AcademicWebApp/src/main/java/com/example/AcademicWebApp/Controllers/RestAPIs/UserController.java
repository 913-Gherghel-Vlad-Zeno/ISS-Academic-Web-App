package com.example.AcademicWebApp.Controllers.RestAPIs;


import com.example.AcademicWebApp.Repositories.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Locale;

@RestController
public class UserController {

    @Autowired
    UsersRepo usersRepo;

    @CrossOrigin(origins = "http://localhost:4200/")
    @GetMapping("/user/{username}")
    public ResponseEntity<String> getUser(@PathVariable("username") String username){

        if(usersRepo.existsById(username)){
            return new ResponseEntity<String>(usersRepo.getById(username).getRole().toString(), HttpStatus.OK);
        }
        else{
            return new ResponseEntity<String>("null", HttpStatus.OK);
        }

    }




}
