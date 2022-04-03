package com.example.AcademicWebApp.Repositories;

import com.example.AcademicWebApp.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepo extends JpaRepository<User, String>
{

}
