import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {ActivatedRoute, Router} from '@angular/router';
import {Candidat} from '../../../model/candidat';
import {CandidatService} from '../../../services/candidat.service';

@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.css']
})
export class AddCandidatComponent implements OnInit {

  private candidat: Candidat = new Candidat();
  btnVisible = true;
  constructor(private messageService: MessageService, private candidatService: CandidatService,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const action = this.route.snapshot.paramMap.get('param');
    if (action === 'edit') {
      this.candidat = this.candidatService.candidat;
      this.btnVisible = false;
    }
  }
  ajouter() {
    this.candidatService.save(this.candidat)
      .subscribe( data => {
        if (data.success) {
          this.messageService.add({severity: 'success', summary: data.message});
          this.router.navigate(['candidat']);
        } else {
          this.messageService.add({severity: 'warn', summary: 'Attention' , detail: data.message});
        }
      }, ex => {
        this.messageService.add({severity: 'error', summary: 'Erreur' , detail: 'Opération non effectuée'});
        console.log(ex);
      });
  }

  modifier() {
    this.candidatService.update(this.candidat)
      .subscribe( data => {
        if (data.success) {
          this.messageService.add({severity: 'success', summary: data.message});
          this.router.navigate(['candidat']);
        } else {
          this.messageService.add({severity: 'warn', summary: 'Attention' , detail: data.message});
        }
      }, ex => {
        this.messageService.add({severity: 'error', summary: 'Erreur' , detail: 'Opération non effectuée'});
        console.log(ex);
      });
  }

}
