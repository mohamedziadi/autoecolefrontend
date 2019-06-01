import { Component, OnInit } from '@angular/core';


import {ConfirmationService, MessageService} from "primeng/api";
import {AuthentificationService} from "../../services/authentification.service";
import {Router} from "@angular/router";
import {ConduiteEx} from "../../model/conduite-ex";
import {ConduiteExService} from "../../services/conduite-ex.service";



@Component({
  selector: 'app-candidat-conduiteex',
  templateUrl: './candidat-conduiteex.component.html',
  styleUrls: ['./candidat-conduiteex.component.css']
})
export class CandidatConduiteexComponent implements OnInit {

  private list: ConduiteEx[];
  constructor(private confirmationService: ConfirmationService,
              private messageService: MessageService, private authenticationService: AuthentificationService, private router: Router,
              private conduiteExService: ConduiteExService) { }

  ngOnInit() {
    this.authenticationService.getUser().subscribe( res => {

      this.conduiteExService.getByCandidat(res.cin).subscribe(data => {
        this.list = data;
      });
    }, ex => {
      console.log(ex);
    });
  }

  annullEtat(conduiteEx) {
    const load = new ConduiteEx();
    Object.assign(load,conduiteEx);
    load.etat = 'Annulé';
    this.confirmationService.confirm({
      message: 'Veuillez-vous annuler cet enregistement?',
      accept: () => {

        this.conduiteExService.update(load).subscribe(result => {

          if (result.success) {
            this.messageService.add({severity: 'success', summary: result.message});
            this.authenticationService.getUser().subscribe( res => {

              this.conduiteExService.getByCandidat(res.cin).subscribe(data => {
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


  confirmEtat(conduiteEx) {
    const load = new ConduiteEx();
    Object.assign(load,conduiteEx);
    load.etat = 'Confirmé';
    this.confirmationService.confirm({
      message: 'Veuillez-vous confirmer cet enregistement?',
      accept: () => {

        this.conduiteExService.update(load).subscribe(result => {

          if (result.success) {
            this.messageService.add({severity: 'success', summary: result.message});
            this.authenticationService.getUser().subscribe( res => {

              this.conduiteExService.getByCandidat(res.cin).subscribe(data => {
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
