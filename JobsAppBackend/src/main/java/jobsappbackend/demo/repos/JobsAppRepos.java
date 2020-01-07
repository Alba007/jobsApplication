package jobsappbackend.demo.repos;

import jobsappbackend.demo.models.JobsApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobsAppRepos extends JpaRepository<JobsApplication, String> {
    @Query(value = "from  jobsApp where user = ?1")
    List<JobsApplication> findAllJobsAplicatedByUser(String user_is);


}
