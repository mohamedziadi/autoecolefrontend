import { Component, OnInit } from '@angular/core';
import {AutoEcoleService} from '../../services/auto-ecole.service';
import {AutoEcole} from '../../model/auto-ecole';
import {ConfirmationService, MessageService, SelectItem} from 'primeng/api';
import {Seance} from '../../model/seance';
import {Admin} from '../../model/admin';
import {Router} from '@angular/router';
import {InscriptionService} from '../../services/inscription.service';
import {Inscription} from '../../model/inscription';
import {AuthentificationService} from '../../services/authentification.service';


@Component({
  selector: 'app-ecole',
  templateUrl: './ecole.component.html',
  styleUrls: ['./ecole.component.css']
})
export class EcoleComponent implements OnInit {
  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  private list: AutoEcole[];
  private selectedEcole: AutoEcole;
  private displayDialog: boolean;
  private auto: AutoEcole;

  constructor(private autoService: AutoEcoleService, private confirmationService: ConfirmationService,
              private messageService: MessageService, private authenticationService: AuthentificationService, private router: Router,
              private inscriptionService: InscriptionService, private confirmService: ConfirmationService) {
  }


  ngOnInit() {
    this.autoService.getAll().subscribe(data => {
      this.list = data;
      this.sortOptions = [
        {label: 'le plus recent', value: '!nom'},
        {label: 'le plus ancien', value: 'nom'},
        {label: 'adresse', value: 'adresse'}
      ];
    });
    {
    /*  this.authenticationService.getUser().subscribe( res => {

        this.autoService.getByGerant(res.cin).subscribe(data => {
          this.list = data;
        });
      }, ex => {
        console.log(ex);
      });*/
    }

  }

  selectEcole(event: Event, autoEcole: AutoEcole) {
    this.selectedEcole = autoEcole;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectedEcole = null;
  }

  inscrir(autoEcole) {
    this.confirmationService.confirm({
      message: 'Vous etes sur de votre inscription?',
      accept: () => {
        this.authenticationService.getUser().subscribe(res => {
          const inscription = new Inscription();
          inscription.autoEcole = autoEcole;
          inscription.candidat = res;
          this.inscriptionService.save(inscription).subscribe(result => {

            if (result.success) {
              this.messageService.add({severity: 'success', summary: result.message});
              this.router.navigate(['moniteur']);
            } else {
              this.messageService.add({severity: 'warn', summary: 'Attention', detail: result.message});
            }
          }, ex => {
            this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
            console.log(ex);
          });
        }, ex => {
          console.log(ex);
        });
      }
    });
  }

  private edit(auto: AutoEcole) {
    this.autoService.auto = auto;
    this.router.navigate(['ecole', 'edit']);
  }


}





