import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthServiceService} from '../../services/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  @Output() onSignIn: EventEmitter<any> = new EventEmitter<any>();

  constructor(private authService: AuthServiceService, private router: Router) {
  }

  ngOnInit() {

    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  login() {
    const loginForm = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    this.authService.authenticate(loginForm).subscribe(res => {
      console.log(res);
      this.authService.saveToken(res.token);
      this.authService.saveUserData(res.user);
      this.router.navigate(['jobs']);
    });
  }
}
