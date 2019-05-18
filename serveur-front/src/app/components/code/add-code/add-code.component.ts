import { Component, OnInit } from '@angular/core';
import {Code} from '../../../model/code';
import {MessageService} from 'primeng/api';
import {CodeService} from '../../../services/code.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Candidat} from '../../../model/candidat';
import {InscriptionService} from '../../../services/inscription.service';
import {AuthentificationService} from '../../../services/authentification.service';
import {Inscription} from '../../../model/inscription';

@Component({
  selector: 'app-add-code',
  templateUrl: './add-code.component.html',
  styleUrls: ['./add-code.component.css']
})
export class AddCodeComponent implements OnInit {
  inscriptions: Inscription[];
  code: Code = new Code();
  btnVisible = true;
  selectedInscri: Inscription ;
  constructor(private messageService: MessageService, private codeService: CodeService,
              private router: Router, private route: ActivatedRoute,
              private inscriptionService: InscriptionService,
              private authenticationService: AuthentificationService) {
  }

  ngOnInit() {
    const action = this.route.snapshot.paramMap.get('param');
    if (action === 'edit') {
      this.code = this.codeService.code;
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

      this.codeService.save(this.code)
      .subscribe( data => {
        this.router.navigate(['code']);
        this.messageService.add({severity: 'success', summary: 'Succes', detail: 'votre donnèe est bien enregistrer'});
      });
  }
  modifier() {
    this.codeService.update(this.code)
      .subscribe( data => {
        this.router.navigate(['code']);
        this.messageService.add({severity: 'success', summary: 'Succes', detail: 'votre donnèe est bien enregistrer'});
      });
  }


}
