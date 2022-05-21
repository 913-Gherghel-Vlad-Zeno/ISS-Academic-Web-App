package com.example.AcademicWebApp.Controllers.RestAPIs.APIs;

import com.example.AcademicWebApp.Controllers.RestAPIs.Entities.Message;
import com.example.AcademicWebApp.Models.UserData;
import com.example.AcademicWebApp.Services.UserDataService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class UserDataController {


    @Autowired
    UserDataService userDataService;

    @GetMapping("/userdata/{name}")
    public String getFullName(@CookieValue(name = "username") String username, @PathVariable(name="name") String name){
        JSONObject obj = new JSONObject();
        obj.put("fullname", userDataService.getNameByUsername(name));
        return obj.toString();
    }

    @GetMapping("/userdata")
    public UserData getUserData(@CookieValue(name = "username") String username){
        return userDataService.getUserDataByUsername(username);
    }

    @PostMapping("/userdata")
    public Message getUserData(@CookieValue(name = "username") String username, @RequestBody UserData userData){
        return userDataService.saveUserData(userData);
    }




}
