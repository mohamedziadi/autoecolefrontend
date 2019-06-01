import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {AuthentificationService} from "../../services/authentification.service";
import {Router} from "@angular/router";
import {CodeEx} from "../../model/code-ex";
import {CodeExService} from "../../services/code-ex.service";

@Component({
  selector: 'app-candidat-codeex',
  templateUrl: './candidat-codeex.component.html',
  styleUrls: ['./candidat-codeex.component.css']
})
export class CandidatCodeexComponent implements OnInit {

  private list: CodeEx[];
  constructor(private confirmationService: ConfirmationService,
              private messageService: MessageService, private authenticationService: AuthentificationService, private router: Router,
              private codeExService: CodeExService) { }

  ngOnInit() {
    this.authenticationService.getUser().subscribe( res => {

      this.codeExService.getByCandidat(res.cin).subscribe(data => {
        this.list = data;
      });
    }, ex => {
      console.log(ex);
    });
  }

  annullEtat(codeEx) {
    const load = new CodeEx();
    Object.assign(load,codeEx);
    load.etat = 'Annulé';
    this.confirmationService.confirm({
      message: 'Veuillez-vous annuler cet enregistement?',
      accept: () => {

        this.codeExService.update(load).subscribe(result => {

          if (result.success) {
            this.messageService.add({severity: 'success', summary: result.message});
            this.authenticationService.getUser().subscribe( res => {

              this.codeExService.getByCandidat(res.cin).subscribe(data => {
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


  confirmEtat(codeEx) {
    const load = new CodeEx();
    Object.assign(load,codeEx);
    load.etat = 'Confirmé';
    this.confirmationService.confirm({
      message: 'Veuillez-vous confirmer cet enregistement?',
      accept: () => {

        this.codeExService.update(load).subscribe(result => {

          if (result.success) {
            this.messageService.add({severity: 'success', summary: result.message});
            this.authenticationService.getUser().subscribe( res => {

              this.codeExService.getByCandidat(res.cin).subscribe(data => {
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
