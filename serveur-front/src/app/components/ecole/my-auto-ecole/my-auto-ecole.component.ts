import { Component, OnInit } from '@angular/core';
import {AutoEcole} from "../../../model/auto-ecole";
import {AuthentificationService} from "../../../services/authentification.service";
import {AutoEcoleService} from "../../../services/auto-ecole.service";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-my-auto-ecole',
  templateUrl: './my-auto-ecole.component.html',
  styleUrls: ['./my-auto-ecole.component.css']
})
export class MyAutoEcoleComponent implements OnInit {

  autoEcole = new AutoEcole();
  constructor(private authenticationService: AuthentificationService,
              private autoEcoleService: AutoEcoleService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.authenticationService.getUser().subscribe( res => {
      this.autoEcole =   res.autoEcole;
    }, ex => {
      console.log(ex);
    });
  }


  modifier() {
    this.confirmationService.confirm({
      message: 'Vous etes sur de modifier votre données?',
      accept: () => {
        this.autoEcoleService.update(this.autoEcole).subscribe( res => {
          if (res.success) {
            this.messageService.add({severity: 'success', summary: res.message });
          } else {
            this.messageService.add({severity: 'warn', summary: res.message });
          }
        }, ex => {
          this.messageService.add({severity: 'error', summary: 'Erreur de modification' });
          console.log(ex);
        } );
      }
    });
  }

}
