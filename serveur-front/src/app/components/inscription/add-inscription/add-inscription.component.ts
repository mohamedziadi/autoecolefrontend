import { Component, OnInit } from '@angular/core';
import {Inscription} from '../../../model/inscription';
import {MessageService} from 'primeng/api';
import {InscriptionService} from '../../../services/inscription.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-inscription',
  templateUrl: './add-inscription.component.html',
  styleUrls: ['./add-inscription.component.css']
})
export class AddInscriptionComponent implements OnInit {

  private inscription: Inscription = new Inscription();
  btnVisible = true;
  constructor(private messageService: MessageService, private inscriptionService: InscriptionService,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {}
   /* const action = this.route.snapshot.paramMap.get('param');
    if (action === 'edit') {
      this.inscription = this.inscriptionService.inscription;
      this.btnVisible = false;
    }
  }
  ajouter() {
    this.inscriptionService.save(this.inscription)
      .subscribe( data => {
        if (data.success) {
          this.messageService.add({severity: 'success', summary: data.message});
          this.router.navigate(['inscription']);
        } else {
          this.messageService.add({severity: 'warn', summary: 'Attention' , detail: data.message});
        }
      }, ex => {
        this.messageService.add({severity: 'error', summary: 'Erreur' , detail: 'Opération non effectuée'});
        console.log(ex);
      });
  }

  modifier() {
    this.inscriptionService.update(this.inscription)
      .subscribe( data => {
        if (data.success) {
          this.messageService.add({severity: 'success', summary: data.message});
          this.router.navigate(['inscription']);
        } else {
          this.messageService.add({severity: 'warn', summary: 'Attention' , detail: data.message});
        }
      }, ex => {
        this.messageService.add({severity: 'error', summary: 'Erreur' , detail: 'Opération non effectuée'});
        console.log(ex);
      });
  }*/

}
