import { Component, OnInit } from '@angular/core';
import {Seance} from '../../model/seance';
import {SeanceService} from '../../services/seance.service';
import {ConfirmationService} from 'primeng/api';
import {Router} from '@angular/router';



@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.css']
})
export class SeanceComponent implements OnInit {
  ngOnInit(): void {
  }

 /* private list: Seance[];
  constructor(private  seanceService: SeanceService, private confirmationService: ConfirmationService, private router: Router) { }

  ngOnInit() {
    this.seanceService.getAll().subscribe(data => {
      this.list = data;
    });
  }


  delete(seance: Seance): void {
    this.confirmationService.confirm({
      message: 'Veuillez-vous supprimer cet enregistement?',
      accept: () => {
        this.seanceService.delete(seance.id).subscribe(result => {
          this.list = this.list.filter(u => u !== seance);
        });
      },
    });
  }
  addSeance(): void {
    this.router.navigate(['seance', 'new']);
  }
  private  edit(seance: Seance) {
    this.seanceService.seance = seance;
    this.router.navigate(['seance', 'edit']);
  }




  paginate(event) {
    // event.first = Index of the first record
    // event.rows = Number of rows to display in new page
    // event.page = Index of the new page
    // event.pageCount = Total number of pages
  }*/
}
