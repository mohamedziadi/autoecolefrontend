import { Component, OnInit } from '@angular/core';
import {Inscription} from "../../../model/inscription";

import {MessageService} from "primeng/api";

import {ActivatedRoute, Router} from "@angular/router";
import {InscriptionService} from "../../../services/inscription.service";
import {AuthentificationService} from "../../../services/authentification.service";
import {ConduiteEx} from "../../../model/conduite-ex";
import {ConduiteExService} from "../../../services/conduite-ex.service";

@Component({
  selector: 'app-ajt-conduite',
  templateUrl: './ajt-conduite.component.html',
  styleUrls: ['./ajt-conduite.component.css']
})
export class AjtConduiteComponent implements OnInit {

  inscriptions: Inscription[];
  conduiteEx: ConduiteEx = new ConduiteEx();
  btnVisible = true;
  selectedInscri: Inscription ;
  constructor(private messageService: MessageService, private conduiteExService: ConduiteExService,
              private router: Router, private route: ActivatedRoute,
              private inscriptionService: InscriptionService,
              private authenticationService: AuthentificationService) {
  }

  ngOnInit() {
    const action = this.route.snapshot.paramMap.get('param');
    if (action === 'edit') {
      this.conduiteEx = this.conduiteExService.conduiteEx;
      this.btnVisible = false;
    }
    this.authenticationService.getUser().subscribe( res => {

      this.inscriptionService.getInscriptionConfirmed( res.autoEcole.id).subscribe( data => {
        this.inscriptions = data;
      });
    }, ex => {
      console.log(ex);
    });
  }
  ajouter() {

    this.conduiteExService.save(this.conduiteEx)
      .subscribe( data => {
        this.router.navigate(['code-ex']);
        this.messageService.add({severity: 'success', summary: 'Succes', detail: 'votre donnèe est bien enregistrer'});
      });
  }
  modifier() {
    this.conduiteExService.update(this.conduiteEx)
      .subscribe( data => {
        this.router.navigate(['conduiteEx']);
        this.messageService.add({severity: 'success', summary: 'Succes', detail: 'votre donnèe est bien enregistrer'});
      });
  }


}
