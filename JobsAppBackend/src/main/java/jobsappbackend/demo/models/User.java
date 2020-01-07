package jobsappbackend.demo.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import org.hibernate.annotations.Cascade;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;


@Entity
public class User  {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String username;
    private String password;
    private String email;

    public User(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.role = user.getRole();
        this.password = user.getPassword();
        this.email = user.getEmail();
        this.jobsApp = user.getJobsApp();

    }

    public enum Role {
        User,
        Admin
    }

    public Role role;
    @JsonManagedReference
    @OneToMany(fetch = FetchType.LAZY,mappedBy = "user", cascade = CascadeType.MERGE)
    private Set<JobsApplication> jobsApp;

    public User() {
    }

    public User(String username, String password, String email, Role role, Set<JobsApplication> jobsApp) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
        this.jobsApp = jobsApp;
    }

    public Set<JobsApplication> getJobsApp() {
        return jobsApp;
    }

    public void setJobsApp(Set<JobsApplication> jobsApp) {
        this.jobsApp = jobsApp;
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



    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
