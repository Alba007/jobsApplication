package jobsappbackend.demo.dto;

import jobsappbackend.demo.models.JobsApplication;
import jobsappbackend.demo.models.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.Set;


public class UserDto  {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String username;
    private String email;
    private  User.Role role;

    private Set<JobsApplication> jobsApp;

    public UserDto(User user) {
    }

    public UserDto() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public User.Role getRole() {
        return role;
    }

    public void setRole(User.Role role) {
        this.role = role;
    }

    public Set<JobsApplication> getJobsApp() {
        return jobsApp;
    }

    public void setJobsApp(Set<JobsApplication> jobsApp) {
        this.jobsApp = jobsApp;
    }
}
