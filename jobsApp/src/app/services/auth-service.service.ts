import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  authUrl = 'http://localhost:8080/authenticate';

  constructor(private httplienet: HttpClient) {
  }

  authenticate(loginForm): Observable<any> {
    console.log(loginForm);
    return this.httplienet.post(this.authUrl, loginForm);
  }

  saveUserData(userData) {
    sessionStorage.setItem('User', JSON.stringify(userData));
  }

  saveToken(token) {
    sessionStorage.setItem('Bearer', token);
  }

  getToken() {
    return sessionStorage.getItem('Bearer');

  }

  deleteToken() {
    localStorage.removeItem('Bearer');
  }
}
