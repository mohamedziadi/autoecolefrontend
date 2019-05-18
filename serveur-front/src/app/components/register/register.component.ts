import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthentificationService} from '../../services/authentification.service';
import {RegisterService} from '../../services/register.service';
import {MessageService} from 'primeng/api';
import {Candidat} from '../../model/candidat';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  candidat: Candidat = new Candidat();

  constructor(
    private router: Router,
    private authenticationService: AuthentificationService,
    private registerService: RegisterService,
    private messageService: MessageService) {
  }
  ngOnInit() {
  }

  register() {

    this.registerService.register(this.candidat)
      .subscribe(
        data => {
          //   this.alertService.success('Registration successful', true);
          if (data.success) {
            this.router.navigate(['/login']);
          } else {
            this.messageService.add({severity: 'warn', summary: 'Attention', detail: data.message});
          }
        },
        ex => {
          //   this.alertService.error(error);
          this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectué'});
          console.log(ex);
        });
  }

}
