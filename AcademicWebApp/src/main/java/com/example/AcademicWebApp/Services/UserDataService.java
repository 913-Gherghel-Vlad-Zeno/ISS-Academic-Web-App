package com.example.AcademicWebApp.Services;

import com.example.AcademicWebApp.Repositories.UserDataRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("userDataService")
public class UserDataService {



    @Autowired
    public UserDataRepo userDataRepo;


    public String getNameByUsername(String username){
        return userDataRepo.getById(username).getName() + " " + userDataRepo.getById(username).getSurname();
    }

}
