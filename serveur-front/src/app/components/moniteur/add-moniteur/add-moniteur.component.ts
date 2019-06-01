import { Component, OnInit } from '@angular/core';

import {MessageService} from 'primeng/api';
import {MoniteurService} from '../../../services/moniteur.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Moniteur} from '../../../model/moniteur';
import {AuthentificationService} from '../../../services/authentification.service';
import {AutoEcole} from '../../../model/auto-ecole';


@Component({
  selector: 'app-add-moniteur',
  templateUrl: './add-moniteur.component.html',
  styleUrls: ['./add-moniteur.component.css']
})
export class AddMoniteurComponent implements OnInit {
  private moniteur: Moniteur = new Moniteur();
  btnVisible = true;



  constructor(private messageService: MessageService, private moniteurService: MoniteurService,
              private router: Router, private route: ActivatedRoute, private authenticationService: AuthentificationService) {
  }

  ngOnInit() {
    const action = this.route.snapshot.paramMap.get('param');
    if (action === 'edit') {
      this.moniteur = this.moniteurService.moniteur;
      this.btnVisible = false;
    }
  }
  ajouter() {

    this.authenticationService.getUser().subscribe( res => {
      this.moniteur.autoEcole =   res.autoEcole;
      this.moniteurService.save(this.moniteur)
        .subscribe( data => {
          if (data.success) {
            this.messageService.add({severity: 'success', summary: data.message});
            this.router.navigate(['moniteur']);
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
    this.moniteurService.update(this.moniteur)
      .subscribe( data => {
        if (data.success) {
          this.messageService.add({severity: 'success', summary: data.message});
          this.router.navigate(['moniteur']);
        } else {
          this.messageService.add({severity: 'warn', summary: 'Attention' , detail: data.message});
        }
      }, ex => {
        this.messageService.add({severity: 'error', summary: 'Erreur' , detail: 'Opération non effectuée'});
        console.log(ex);
      });
  }
}
