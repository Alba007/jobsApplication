package jobsappbackend.demo.repos;

import jobsappbackend.demo.models.Jobs;
import jobsappbackend.demo.models.JobsApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobRepos extends JpaRepository<Jobs, String> {
    long count();

    
    @Query(value = "SELECT * from jobs where description=?1", nativeQuery = true)

    List<Jobs> jobsByDescript(String description);


    @Query(value = "SELECT * from jobs  limit 10", nativeQuery = true)
    List<Jobs> top10Jobs();
}

