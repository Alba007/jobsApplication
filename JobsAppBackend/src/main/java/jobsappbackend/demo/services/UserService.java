package jobsappbackend.demo.services;


import com.sun.istack.Nullable;
import jobsappbackend.demo.dto.UserDto;
import jobsappbackend.demo.models.JobsApplication;
import jobsappbackend.demo.models.User;
import jobsappbackend.demo.repos.JobsAppRepos;
import jobsappbackend.demo.repos.UserRepos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepos userRepos;


    @Autowired
    private JobsAppRepos jobsapprepos;

    public List<UserDto> getAllUsers() {
        List<UserDto> list = new ArrayList<>();
        List<User> listUser = this.userRepos.findAll();
        for (User user : listUser) {
            list.add(convertUsersToUsersDto(user));
        }
        return list;
    }

    public UserDto getUserById(String id) {
        return convertUsersToUsersDto(Objects.requireNonNull(this.userRepos.findById(id).orElse(null)));
    }

    public UserDto getByUsername(String username) {
        return convertUsersToUsersDto(Objects.requireNonNull(this.userRepos.findByUsername(username)));
    }

    public UserDto postUser(User user) {
        this.userRepos.save(user);
        return convertUsersToUsersDto(user);
    }

    public UserDto editUser(long id, User user) {
        User data = userRepos.findById(id).orElse(null);
        String password =data.getPassword();
        user.setId(id);
        user.setPassword(password);
        this.userRepos.save(user);
        return convertUsersToUsersDto(user);
    }

    public void deleteUser(String id) {
        this.userRepos.delete(this.userRepos.getOne(id));
    }

    public UserDto convertUsersToUsersDto(User user) {
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setEmail(user.getEmail());
        userDto.setUsername(user.getUsername());
        userDto.setRole(user.getRole());
        userDto.setJobsApp(user.getJobsApp());
        return userDto;
    }

    public List<JobsApplication> getAllJobsApplicatedByUser(String id_user) {
        return this.jobsapprepos.findAllJobsAplicatedByUser(id_user);
    }
}
