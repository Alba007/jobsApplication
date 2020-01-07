package jobsappbackend.demo.controllers;

import jobsappbackend.demo.models.Jobs;
import jobsappbackend.demo.services.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("jobs")
public class JobController {
    @Autowired
    private JobService jobService;

    @GetMapping(value = "/top")
    public List<Jobs> top10Jobs() {
        return this.jobService.top10Jobs();
    }
    @GetMapping(value = "/byDesc/{description}")
    public List<Jobs> jobsByDesc(@PathVariable String description) {
        return this.jobService.jobsBydesc(description);
    }


    @GetMapping
    public List<Jobs> getAllJobs() {
        return this.jobService.getAllJobs();
    }

    @GetMapping(value = "/byId/{id}")
    public Jobs getJobById(@PathVariable String id) {
        return this.jobService.getJobsById(id);
    }
    @GetMapping(value = "/no")
    public long findNumberOfJobs() {
        return this.jobService.getNumberOfJobs();
    }

    @PostMapping
    public Jobs addJob(@RequestBody Jobs job) {
        return this.jobService.postJob(job);
    }

    @PutMapping(value = "/{id}")
    public Jobs editJob(@PathVariable long id, @RequestBody Jobs job) {
        return this.jobService.editJobs(id, job);
    }

    @DeleteMapping
    public void deleteJob(@PathVariable String id) {
        this.jobService.deleteJobs(id);
    }
}
