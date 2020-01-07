package jobsappbackend.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import net.bytebuddy.dynamic.loading.InjectionClassLoader;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Jobs {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String title;
    private String description;

    @JsonIgnore
    @OneToMany(mappedBy = "jobs", cascade = CascadeType.ALL)
    private Set<JobsApplication> jobsApp = new HashSet<>();


    public Jobs() {
    }

    public Jobs(String title, String description) {
        this.title = title;
        this.description = description;
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


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


}
