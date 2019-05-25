import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {AuthentificationService} from "../../services/authentification.service";
import {Router} from "@angular/router";
import {CodeService} from "../../services/code.service";
import {Secretaire} from "../../model/secretaire";
import {Code} from "../../model/code";

@Component({
  selector: 'app-candidat-code',
  templateUrl: './candidat-code.component.html',
  styleUrls: ['./candidat-code.component.css']
})
export class CandidatCodeComponent implements OnInit {
  private list: Code[];
  constructor(private confirmationService: ConfirmationService,
              private messageService: MessageService, private authenticationService: AuthentificationService, private router: Router,
              private codeService: CodeService) { }

  ngOnInit() {
    this.authenticationService.getUser().subscribe( res => {

      this.codeService.getByCandidat(res.cin).subscribe(data => {
        this.list = data;
      });
    }, ex => {
      console.log(ex);
    });
  }

annullEtat(code) {
  const load = new Code();
  Object.assign(load,code);
  load.etat = 'Annulé';
  this.confirmationService.confirm({
    message: 'Veuillez-vous annuler cet enregistement?',
    accept: () => {

      this.codeService.update(load).subscribe(result => {

        if (result.success) {
          this.messageService.add({severity: 'success', summary: result.message});
          this.authenticationService.getUser().subscribe( res => {

            this.codeService.getByCandidat(res.cin).subscribe(data => {
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


  confirmEtat(code) {
    const load = new Code();
    Object.assign(load,code);
    load.etat = 'Confirmé';
    this.confirmationService.confirm({
      message: 'Veuillez-vous confirmer cet enregistement?',
      accept: () => {

        this.codeService.update(load).subscribe(result => {

          if (result.success) {
            this.messageService.add({severity: 'success', summary: result.message});
            this.authenticationService.getUser().subscribe( res => {

              this.codeService.getByCandidat(res.cin).subscribe(data => {
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
