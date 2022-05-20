package com.example.AcademicWebApp.Controllers.RestAPIs;
<<<<<<< HEAD
<<<<<<< Updated upstream


=======
import com.example.AcademicWebApp.Models.User;
>>>>>>> Stashed changes
=======
>>>>>>> c2ad184c938095c9f0cba80235b0118089821341
import com.example.AcademicWebApp.Repositories.UsersRepo;
import com.example.AcademicWebApp.Services.UserService;
import com.example.AcademicWebApp.Utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
<<<<<<< HEAD
<<<<<<< Updated upstream

=======
=======
>>>>>>> c2ad184c938095c9f0cba80235b0118089821341
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;
import javax.servlet.http.HttpServletRequest;
<<<<<<< HEAD
import java.util.Arrays;
>>>>>>> Stashed changes
=======
>>>>>>> c2ad184c938095c9f0cba80235b0118089821341
import java.util.Locale;
import java.util.Objects;

@RestController
public class UserController {

    @Autowired
    UserService userService;
    @Autowired
    UsersRepo usersRepo;

    @CrossOrigin(origins = "http://localhost:4200/")
<<<<<<< HEAD
<<<<<<< Updated upstream
=======

>>>>>>> c2ad184c938095c9f0cba80235b0118089821341
    @GetMapping("/user/{username}")
    public ModelAndView redirectToRole(HttpServletRequest request, @PathVariable("username") String username) {

        UserEntity userEntity = getUser(username);
        if(Objects.equals(userEntity.getRole(), "null"))
            return new ModelAndView("forward:/invalid-user");

        String role = userEntity.getRole();
        //model.addAttribute("role", user.getRole());
        //request.setAttribute("username", username);
        //request.setAttribute("role", role);
        request.setAttribute("userEntity", userEntity);
        request.setAttribute("user", usersRepo.getById(username));


        return new ModelAndView("forward:/{username}/" + role);
    }


    //@GetMapping("/user/{username}")
    public UserEntity getUser(String username){

        if(usersRepo.existsById(username)){

            return new UserEntity(usersRepo.getById(username).getRole().toString());
        }
        else{

            return new UserEntity("null");
        }

=======

    /**
    //@GetMapping("/user/{username}")
    public ModelAndView redirectToRole(HttpServletRequest request, @PathVariable("username") String username) {

        UserEntity userEntity = getUser(username);
        if(Objects.equals(userEntity.getRole(), "null"))
            return new ModelAndView("forward:/invalid-user");

        String role = userEntity.getRole();
        //model.addAttribute("role", user.getRole());
        //request.setAttribute("username", username);
        //request.setAttribute("role", role);
        request.setAttribute("userEntity", userEntity);
        request.setAttribute("user", usersRepo.getById(username));


        return new ModelAndView("forward:/{username}/" + role);
    }

    */
    @GetMapping("/user")
    public UserEntity getUser(@RequestParam("username") String username, @RequestParam("password") String pass){
        //String hash = Utils.hashPassword("asd");
        //usersRepo.save(new User("aa", hash, "teacher"));
        return userService.logIn(username, pass);
        //return new UserEntity("", "");
>>>>>>> Stashed changes
    }
}
