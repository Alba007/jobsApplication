import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerateDataService {
  jobsUrl = 'http://localhost:8080/jobs';
  userUrl = 'http://localhost:8080/user';

  constructor(private httpClient: HttpClient) {
  }

  getallJobs(): Observable<any> {
    return this.httpClient.get(this.jobsUrl);
  }

  getTop10Jobs(): Observable<any> {
    return this.httpClient.get(this.jobsUrl + '/top');
  }

  editJobs(job): Observable<any> {
    return this.httpClient.put(this.jobsUrl + `/${job.id}`, job);
  }

  addJobs(job): Observable<any> {
    return this.httpClient.post(this.jobsUrl, job);
  }

  editUser(user): Observable<any> {
    console.log(user.id);
    return this.httpClient.put(this.userUrl + `/${user.id}`, user);
  }

  editUserApplication(user): Observable<any> {
    return this.httpClient.put(this.userUrl + `/1`, user);
  }

  findAllJobsNumber(): Observable<any> {
    return this.httpClient.get(this.jobsUrl + `/no`);
  }

}
