import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GenerateDataService} from '../../services/generate-data.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {
  formGroup: any;
  user: any;

  constructor(private dataService: GenerateDataService) {
  }

  ngOnInit() {
    const userData = JSON.parse(sessionStorage.getItem('User'));
    console.log(userData);
    this.user = userData;
    this.formGroup = new FormGroup({
      username: new FormControl(userData.username, Validators.required),
      email: new FormControl(userData.email, Validators.required),
      role: new FormControl(userData.role, Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  editUseR() {
    const dataToBeEdited = {
      id: this.user.id,
      username: this.formGroup.value.username,
      email: this.formGroup.value.email,
      password: this.formGroup.value.password,
      role: this.formGroup.value.role,
    };
    this.dataService.editUser(dataToBeEdited).subscribe();
  }

}
