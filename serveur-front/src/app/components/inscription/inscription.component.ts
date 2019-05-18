import { Component, OnInit } from '@angular/core';
import {Inscription} from '../../model/inscription';
import {InscriptionService} from '../../services/inscription.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  private list: Inscription[];
  constructor(private  inscriptionService: InscriptionService,
              private confirmationService: ConfirmationService,
              private authenticationService: AuthentificationService,
              private messageService: MessageService, private router: Router) { }

  ngOnInit() {
    this.authenticationService.getUser().subscribe( res => {
      this.inscriptionService.getAll(res.autoEcole.id).subscribe(data => {
        this.list = data;
      });
    }, ex => {
      console.log(ex);
    });
  }

  handleChange(e) {
    this.inscriptionService.update(e)
      .subscribe( data => {
        if (data.success) {
          this.messageService.add({severity: 'success', summary: data.message});
        } else {
          this.messageService.add({severity: 'warn', summary: 'Attention' , detail: data.message});
        }
      }, ex => {
        this.messageService.add({severity: 'error', summary: 'Erreur' , detail: 'Opération non effectuée'});
        console.log(ex);
      });
  }
}
