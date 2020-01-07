import {Component, OnInit} from '@angular/core';
import {AuthServiceService} from '../../services/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isUser = true;

  constructor(private authService: AuthServiceService, private router: Router) {
  }

  ngOnInit() {
    const user = JSON.parse(sessionStorage.getItem('User'));
    if (user.role === 'User') {
      this.isUser = true;
    } else {
      this.isUser = false;
    }
  }

  logout() {
    this.authService.deleteToken();
    this.router.navigate(['login']).then();
  }

  goToApp() {
    this.router.navigate(['application']).then();
  }

  goToJobs() {
    this.router.navigate(['jobs']).then();
  }

  goToProfile() {
    this.router.navigate(['data']).then();
  }
}
