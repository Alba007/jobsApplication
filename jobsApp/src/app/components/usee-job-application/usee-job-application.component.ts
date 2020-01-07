import {Component, OnInit} from '@angular/core';
import {GenerateDataService} from '../../services/generate-data.service';
import {MatTableDataSource} from '@angular/material';
import {JobsApplication} from '../../models/jobsApplication';

@Component({
  selector: 'app-usee-job-application',
  templateUrl: './usee-job-application.component.html',
  styleUrls: ['./usee-job-application.component.css']
})
export class UseeJobApplicationComponent implements OnInit {
  dataSource: any;
  displayedColumns = ['title', 'description', 'application'];
  jobs: any[];
  application: any[] = [];
  data: JobsApplication;

  constructor(private getDataService: GenerateDataService) {
  }

  ngOnInit() {
    this.getDataService.getallJobs().subscribe(res => {
      const data = JSON.parse(sessionStorage.getItem('User')).jobsApp;
      data.forEach(el => {
        this.application.push(el.jobs.id);
      });
      this.jobs = res;
      this.dataSource = new MatTableDataSource(res);
      console.log(this.application);
    });

  }

  applicate(datasource: any) {
    const user = JSON.parse(sessionStorage.getItem('User'));
    let appl = [];
    // this.application.forEach(el => {
    //   appl.push({
    //     jobs: {
    //       id: el as number
    //     },
    //     user: {
    //       id: user.id as number
    //     }
    //   });
    // });
    appl.push({
      jobs: {
        id: datasource.id as number
      },
      user: {
        id: user.id as number
      }
    });
    this.data = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      jobsApp: appl
    };
    console.log(this.data);
    this.getDataService.editUserApplication(this.data).subscribe();
  }


}
