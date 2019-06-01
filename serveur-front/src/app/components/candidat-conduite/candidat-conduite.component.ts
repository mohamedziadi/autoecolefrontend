import { Component, OnInit } from '@angular/core';
import {Conduite} from "../../model/conduite";
import {ConfirmationService, MessageService} from "primeng/api";
import {AuthentificationService} from "../../services/authentification.service";
import {Router} from "@angular/router";
import {ConduiteService} from "../../services/conduite.service";


@Component({
  selector: 'app-candidat-conduite',
  templateUrl: './candidat-conduite.component.html',
  styleUrls: ['./candidat-conduite.component.css']
})
export class CandidatConduiteComponent implements OnInit {
  private list: Conduite[];
  constructor(private confirmationService: ConfirmationService,
              private messageService: MessageService, private authenticationService: AuthentificationService, private router: Router,
              private conduiteService: ConduiteService) { }

  ngOnInit() {
    this.authenticationService.getUser().subscribe( res => {

      this.conduiteService.getByCandidat(res.cin).subscribe(data => {
        this.list = data;
      });
    }, ex => {
      console.log(ex);
    });
  }

  annullEtat(conduite) {
    const load = new Conduite();
    Object.assign(load,conduite);
    load.etat = 'Annulé';
    this.confirmationService.confirm({
      message: 'Veuillez-vous annuler cet enregistement?',
      accept: () => {

        this.conduiteService.update(load).subscribe(result => {

          if (result.success) {
            this.messageService.add({severity: 'success', summary: result.message});
            this.authenticationService.getUser().subscribe( res => {

              this.conduiteService.getByCandidat(res.cin).subscribe(data => {
                this.list = data;
              });
            }, ex => {
              console.log(ex);
            });
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


  confirmEtat(conduite) {
    const load = new Conduite();
    Object.assign(load,conduite);
    load.etat = 'Confirmé';
    this.confirmationService.confirm({
      message: 'Veuillez-vous confirmer cet enregistement?',
      accept: () => {

        this.conduiteService.update(load).subscribe(result => {

          if (result.success) {
            this.messageService.add({severity: 'success', summary: result.message});
            this.authenticationService.getUser().subscribe( res => {

              this.conduiteService.getByCandidat(res.cin).subscribe(data => {
                this.list = data;
              });
            }, ex => {
              console.log(ex);
            });
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
}
