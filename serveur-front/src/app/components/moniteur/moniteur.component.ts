import { Component, OnInit } from '@angular/core';
import {Moniteur} from '../../model/moniteur';
import {MoniteurService} from '../../services/moniteur.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {AuthentificationService} from '../../services/authentification.service';


@Component({
  selector: 'app-moniteur',
  templateUrl: './moniteur.component.html',
  styleUrls: ['./moniteur.component.css']
})
export class MoniteurComponent implements OnInit {
  idAutoEcole: number;
  private list: Moniteur[];
  constructor(private  moniteurService: MoniteurService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService, private router: Router,
              private authenticationService: AuthentificationService) { }

  ngOnInit() {

    this.authenticationService.getUser().subscribe( res => {
      this.idAutoEcole = res.autoEcole.id ;
      this.moniteurService.getAll(this.idAutoEcole).subscribe(data => {
        this.list = data;
      });
    }, ex => {
      console.log(ex);
    });
  }
  private delete(moniteur: Moniteur) {

    this.confirmationService.confirm({
      message: 'Veuillez-vous supprimer cet enregistement?',
      accept: () => {

        this.moniteurService.delete(moniteur.cin).subscribe(result => {

          if (result.success) {
            this.messageService.add({severity: 'success', summary: result.message});
            this.list = this.list.filter(obj => obj !== moniteur);
          } else {
            this.messageService.add({severity: 'warn', summary: result.message});
          }
        }, ex => {
          this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
          console.log(ex);
        });
      }
    });

  }
  addMoniteur(): void {
    this.router.navigate(['moniteur', 'new']);
  }
  private  edit(moniteur: Moniteur) {
    this.moniteurService.moniteur = moniteur;
    this.router.navigate(['moniteur', 'edit']);
  }

}
