import { Component, OnInit } from '@angular/core';
import {Inscription} from "../../../model/inscription";

import {MessageService} from "primeng/api";

import {ActivatedRoute, Router} from "@angular/router";
import {InscriptionService} from "../../../services/inscription.service";
import {AuthentificationService} from "../../../services/authentification.service";
import {CodeEx} from "../../../model/code-ex";
import {CodeExService} from "../../../services/code-ex.service";

@Component({
  selector: 'app-ajt-code',
  templateUrl: './ajt-code.component.html',
  styleUrls: ['./ajt-code.component.css']
})
export class AjtCodeComponent implements OnInit {

  inscriptions: Inscription[];
  codeEx: CodeEx = new CodeEx();
  btnVisible = true;
  selectedInscri: Inscription ;
  constructor(private messageService: MessageService, private codeExService: CodeExService,
              private router: Router, private route: ActivatedRoute,
              private inscriptionService: InscriptionService,
              private authenticationService: AuthentificationService) {
  }

  ngOnInit() {
    const action = this.route.snapshot.paramMap.get('param');
    if (action === 'edit') {
      this.codeEx = this.codeExService.codeEx;
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

    this.codeExService.save(this.codeEx)
      .subscribe( data => {
        this.router.navigate(['code-ex']);
        this.messageService.add({severity: 'success', summary: 'Succes', detail: 'votre donnèe est bien enregistrer'});
      });
  }
  modifier() {
    this.codeExService.update(this.codeEx)
      .subscribe( data => {
        this.router.navigate(['code-ex']);
        this.messageService.add({severity: 'success', summary: 'Succes', detail: 'votre donnèe est bien enregistrer'});
      });
  }


}
