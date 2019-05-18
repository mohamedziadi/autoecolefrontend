import { Component, OnInit } from '@angular/core';
import {Moniteur} from '../../../model/moniteur';
import {Router} from '@angular/router';
import {AuthentificationService} from '../../../services/authentification.service';
import {RegisterService} from '../../../services/register.service';
import {MessageService} from 'primeng/api';
import {AutoEcole} from '../../../model/auto-ecole';

@Component({
  selector: 'app-register-auto-ecole',
  templateUrl: './register-auto-ecole.component.html',
  styleUrls: ['./register-auto-ecole.component.css']
})
export class RegisterAutoEcoleComponent implements OnInit {

  moniteur: Moniteur = new Moniteur();
  autoEcole = new AutoEcole();
  cin: number;
  constructor(
    private router: Router,
    private authenticationService: AuthentificationService,
    private registerService: RegisterService,
    private messageService: MessageService) {
  }
  ngOnInit() {
  }

  register() {
    this.moniteur.autoEcole = this.autoEcole;
    this.registerService.registerAutoEcole(this.moniteur)
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
