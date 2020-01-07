package jobsappbackend.demo.services;

import jobsappbackend.demo.models.Jobs;
import jobsappbackend.demo.repos.JobRepos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    @Autowired
    private JobRepos jobsRepos;

    public List<Jobs> top10Jobs() {
        return this.jobsRepos.top10Jobs();
    }

    public List<Jobs> jobsBydesc(String description) {
        return this.jobsRepos.jobsByDescript(description);
    }

    public List<Jobs> getAllJobs() {
        return this.jobsRepos.findAll();
    }

    public Jobs getJobsById(String id) {
        return this.jobsRepos.findById(id).orElse(null);
    }

    public Jobs postJob(Jobs job) {
        return this.jobsRepos.save(job);
    }

    public Jobs editJobs(long id, Jobs job) {
        job.setId(id);
        return this.jobsRepos.save(job);
    }

    public long getNumberOfJobs() {
        return this.jobsRepos.count();
    }

    public void deleteJobs(String id) {
        this.jobsRepos.delete(this.jobsRepos.getOne(id));
    }
}
