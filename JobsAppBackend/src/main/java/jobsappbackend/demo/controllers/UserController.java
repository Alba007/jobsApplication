package jobsappbackend.demo.controllers;


import jobsappbackend.demo.dto.UserDto;
import jobsappbackend.demo.models.JobsApplication;
import jobsappbackend.demo.models.User;
import jobsappbackend.demo.repos.JobsAppRepos;
import jobsappbackend.demo.repos.UserRepos;
import jobsappbackend.demo.services.UserService;
import org.aspectj.lang.annotation.DeclareError;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    private UserService userService;


    @GetMapping
    public List<UserDto> getAllUsers() {
        return this.userService.getAllUsers();
    }

    @GetMapping(value = "byId/{id}")
    public UserDto getUserById(@PathVariable String id) {
        return this.userService.getUserById(id);
    }

    @GetMapping(value = "byId/{username}")
    public UserDto getUserByUsername(@PathVariable String username) {
        return this.userService.getByUsername(username);
    }

    @GetMapping(value = "userApp/{idUser}")
    public List<JobsApplication> getUserApp(@PathVariable String idUser) {
        return this.userService.getAllJobsApplicatedByUser(idUser);
    }

    @PostMapping
    public UserDto addUser(@RequestBody User user) {
        return this.userService.postUser(user);
    }

    @PutMapping(value = "/{id}")
    public UserDto editUser(@PathVariable String id, @RequestBody User user) {
        long num = Long.parseLong(id);
        return this.userService.editUser(num, user);
    }

    @DeleteMapping
    public void deleteUser(String id) {
        this.userService.deleteUser(id);
    }
}
