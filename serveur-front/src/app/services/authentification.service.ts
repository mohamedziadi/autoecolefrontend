import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Observable} from 'rxjs';
import {Users} from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  jwt: string;
  username: string;
  user: any;
  private url = 'http://localhost:8989/login';

  constructor(private http: HttpClient) {
  }

  login(data) {
    return this.http.post(this.url, data, {observe: 'response'});
  }

  public getUser(): any {
    const jwtHelper = new JwtHelperService();
    const objJWT = jwtHelper.decodeToken(localStorage.getItem('token'));
    this.username = objJWT.sub;
    return this.http.get<Users>('http://localhost:8989/user/' + this.username);
  }

  saveToken(jwt: string) {
    localStorage.setItem('token', jwt);
    this.jwt = jwt;


  }



  getRoles(): string {
    const jwtHelper = new JwtHelperService();
    const objJWT = jwtHelper.decodeToken(localStorage.getItem('token'));
    return objJWT.roles[0].authority;
  }





  logout() {
    return this.http.get<Users>('http://localhost:8989/user/disconnect/' + this.username).subscribe( res => {
      localStorage.removeItem('token');
      location.reload();
    });
  }
}
