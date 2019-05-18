import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthentificationService,
              private router: Router) {
  }

  public ngOnInit() {
  }
  onLOgin(data) {
    // console.log(data);
    this.authService.login(data)
      .subscribe(resp => {
         // console.log(resp);
         const jwt = resp.headers.get('Authorization');
         this.authService.saveToken (jwt);
         this.router.navigate(['']);
      }, err => {

      });
  }


}



