import {Component, OnInit} from '@angular/core';
import {AuthServiceService} from './services/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jobsApp';
  showLogin: any = true;
  saveToken: any = true;

  constructor(private authService: AuthServiceService, private router: Router) {

  }

  ngOnInit(): void {
    if (!this.authService.getToken()) {
      this.router.navigate(['login']).then();
    } else {
      this.router.navigate(['jobs']).then();
    }
  }


  logout() {
    this.authService.deleteToken();
  }
}
