import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Seance} from '../../model/seance';
import {SeanceService} from '../../services/seance.service';
import {ConfirmationService} from 'primeng/api';
import {Router} from '@angular/router';
import {Examen} from '../../model/examen';
import {ExamenService} from '../../services/examen.service';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {
  private list: Examen[];
  constructor(private  examenService: ExamenService, private confirmationService: ConfirmationService, private router: Router) { }

  ngOnInit() {
    this.examenService.getAll().subscribe(data => {
      this.list = data;
    });
  }


  delete(examen: Examen): void {
    this.confirmationService.confirm({
      message: 'Veuillez-vous supprimer cet enregistement?',
      accept: () => {
        this.examenService.delete(examen.id).subscribe(result => {
          this.list = this.list.filter(u => u !== examen);
        });
      },
    });
  }
  addExamen(): void {
    this.router.navigate(['add-examen']);
  }
}
