import {Component, OnInit, ViewChild} from '@angular/core';
import {GenerateDataService} from '../../services/generate-data.service';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {JobsCrudComponent} from '../jobs-crud/jobs-crud.component';
import {PageEvent} from '@angular/material/typings/paginator';

@Component({
  selector: 'app-jobs-component',
  templateUrl: './jobs-component.component.html',
  styleUrls: ['./jobs-component.component.css']
})
export class JobsComponentComponent implements OnInit {
  jobs: any[] = [];
  dataSource: any = null;
  displayedColumns = ['title', 'description', 'delete', 'edit'];
  totalNumberOfJobs: number;
  showActions = false;
  pageSize = 10;
  pageSizeOptions: number[] = [10, 50, this.totalNumberOfJobs];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private getDataService: GenerateDataService, private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.getDataService.getTop10Jobs().subscribe(res => {
      this.getDataService.findAllJobsNumber().subscribe(res1 => {
        this.totalNumberOfJobs = res1;
        this.jobs = res;
        this.dataSource = new MatTableDataSource(this.jobs);
        this.jobs = res;
        this.pageSizeOptions = [10, this.totalNumberOfJobs];
        this.dataSource.paginator = this.paginator;
      });
    });
    if (JSON.parse(sessionStorage.getItem('User')).role === 'Admin') {
      this.showActions = true;
    }
  }

  editJob(job) {
    this.matDialog.open(JobsCrudComponent, {
      width: '50%',
      height: '50%',
      data: job
    });
  }

  handlePage($event: PageEvent) {
    if ($event.pageSize > 10) {
      if (this.dataSource.filteredData.length = 10) {
        //merr pas 10 nga db
        console.log(this.dataSource.filteredData.length);
      }
    }

  }

}
