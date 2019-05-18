import { Component, OnInit } from '@angular/core';

import {MessageService} from 'primeng/api';
import {SecretaireService} from '../../../services/secretaire.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Secretaire} from '../../../model/secretaire';
import {AuthentificationService} from '../../../services/authentification.service';
import {AutoEcole} from '../../../model/auto-ecole';


@Component({
  selector: 'app-add-secretaire',
  templateUrl: './add-secretaire.component.html',
  styleUrls: ['./add-secretaire.component.css']
})
export class AddSecretaireComponent implements OnInit {
  private secretaire: Secretaire = new Secretaire();
  btnVisible = true;



  constructor(private messageService: MessageService, private secretaireService: SecretaireService,
              private router: Router, private route: ActivatedRoute, private authenticationService: AuthentificationService) {
  }

  ngOnInit() {
    const action = this.route.snapshot.paramMap.get('param');
    if (action === 'edit') {
      //  this.secretaire = this.secretaireService.secretaire;
      this.btnVisible = false;
    }
  }
  ajouter() {

    this.authenticationService.getUser().subscribe( res => {
      this.secretaire.autoEcole =   res.autoEcole;
      this.secretaireService.save(this.secretaire)
        .subscribe( data => {
          if (data.success) {
            this.messageService.add({severity: 'success', summary: data.message});
            this.router.navigate(['secretaire']);
          } else {
            this.messageService.add({severity: 'warn', summary: 'Attention' , detail: data.message});
          }
        }, ex => {
          this.messageService.add({severity: 'error', summary: 'Erreur' , detail: 'Opération non effectuée'});
          console.log(ex);
        });
    }, ex => {
      console.log(ex);
    });

  }

  modifier() {
    this.secretaireService.update(this.secretaire)
      .subscribe( data => {
        if (data.success) {
          this.messageService.add({severity: 'success', summary: data.message});
          this.router.navigate(['secretaire']);
        } else {
          this.messageService.add({severity: 'warn', summary: 'Attention' , detail: data.message});
        }
      }, ex => {
        this.messageService.add({severity: 'error', summary: 'Erreur' , detail: 'Opération non effectuée'});
        console.log(ex);
      });
  }
}
