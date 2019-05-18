import { Component, OnInit } from '@angular/core';
import {Candidat} from '../../model/candidat';
import {CandidatService} from '../../services/candidat.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';


@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {

  private list: Candidat[];
  constructor(private  candidatService: CandidatService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService, private router: Router) { }

  ngOnInit() {
    this.candidatService.getAll().subscribe(data => {
      this.list = data;
    });
  }
  private delete(candidat: Candidat) {

    this.confirmationService.confirm({
      message: 'Veuillez-vous supprimer cet enregistement?',
      accept: () => {

        this.candidatService.delete(candidat.cin).subscribe(result => {

          if (result.success) {
            this.messageService.add({severity: 'success', summary: result.message});
            this.list = this.list.filter(obj => obj !== candidat);
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
  addCandidat(): void {
    this.router.navigate(['candidat', 'new']);
  }
  private  edit(candidat: Candidat) {
    this.candidatService.candidat = candidat;
    this.router.navigate(['candidat', 'edit']);
  }

}
