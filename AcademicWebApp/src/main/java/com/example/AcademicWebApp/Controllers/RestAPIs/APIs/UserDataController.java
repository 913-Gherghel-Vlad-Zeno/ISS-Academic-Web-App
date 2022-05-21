package com.example.AcademicWebApp.Controllers.RestAPIs.APIs;

import com.example.AcademicWebApp.Services.UserDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class UserDataController {


    @Autowired
    UserDataService userDataService;

    @GetMapping("/userdata/{name}")
    public String getFullName(@CookieValue(name = "username") String username, @PathVariable(name="name") String name){
        return userDataService.getNameByUsername(name);
    }


}
