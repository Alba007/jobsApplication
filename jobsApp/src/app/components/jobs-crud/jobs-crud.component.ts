import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import {GenerateDataService} from '../../services/generate-data.service';

@Component({
  selector: 'app-jobs-crud',
  templateUrl: './jobs-crud.component.html',
  styleUrls: ['./jobs-crud.component.css']
})
export class JobsCrudComponent implements OnInit {
  formGroup: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private ref: MatDialogRef<JobsCrudComponent>,
              private service: GenerateDataService) {
  }

  ngOnInit() {
    if (this.data !== null) {
      this.formGroup = new FormGroup({
        title: new FormControl(this.data.title),
        description: new FormControl(this.data.description)
      });
    } else {
      this.formGroup = new FormGroup({
        title: new FormControl(''),
        description: new FormControl('')
      });
    }
  }

  save() {
    let job = {
      title: this.formGroup.value.title,
      description: this.formGroup.value.description
    };
    if (this.data !== null) {
      job['id'] = this.data.id;
      this.service.editJobs(job).subscribe();
    } else {
      this.service.addJobs(job).subscribe();
    }
    this.ref.close();
  }
}
