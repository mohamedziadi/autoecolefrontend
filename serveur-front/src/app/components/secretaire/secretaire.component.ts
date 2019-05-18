import { Component, OnInit } from '@angular/core';
import {Secretaire} from '../../model/secretaire';
import {SecretaireService} from '../../services/secretaire.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {AuthentificationService} from '../../services/authentification.service';



@Component({
  selector: 'app-secretaire',
  templateUrl: './secretaire.component.html',
  styleUrls: ['./secretaire.component.css']
})
export class SecretaireComponent implements OnInit {


  private list: Secretaire[];
  idAutoEcole: number;
  constructor(private  secretaireService: SecretaireService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService, private router: Router, private authenticationService: AuthentificationService) { }

  ngOnInit() {

    this.authenticationService.getUser().subscribe( res => {
      this.idAutoEcole = res.autoEcole.id ;
      this.secretaireService.getAll(this.idAutoEcole).subscribe(data => {
        this.list = data;
      });
    }, ex => {
      console.log(ex);
    });
  }
  private delete(secretaire: Secretaire) {

    this.confirmationService.confirm({
      message: 'Veuillez-vous supprimer cet enregistement?',
      accept: () => {

        this.secretaireService.delete(secretaire.cin).subscribe(result => {

          if (result.success) {
            this.messageService.add({severity: 'success', summary: result.message});
            this.list = this.list.filter(obj => obj !== secretaire);
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
  addSecretaire(): void {
    this.router.navigate(['secretaire', 'new']);
  }
  private  edit(secretaire: Secretaire) {
    this.secretaireService.secretaire = secretaire;
    this.router.navigate(['secretaire', 'edit']);
  }

}
