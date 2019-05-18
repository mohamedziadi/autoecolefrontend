import { Component, OnInit } from '@angular/core';
import {Conduite} from '../../model/conduite';
import {ConduiteService} from '../../services/conduite.service';
import {ConfirmationService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-conduite',
  templateUrl: './conduite.component.html',
  styleUrls: ['./conduite.component.css']
})
export class ConduiteComponent implements OnInit {
  private list: Conduite[];
  constructor(private  conduiteService: ConduiteService, private confirmationService: ConfirmationService, private router: Router) { }

  ngOnInit() {
    this.conduiteService.getAll().subscribe(data => {
      this.list = data;
    });
  }


 delete(conduite: Conduite): void {
    this.confirmationService.confirm({
      message: 'Veuillez-vous supprimer cet enregistement?',
      accept: () => {
        this.conduiteService.delete(conduite.id).subscribe(result => {
          this.list = this.list.filter(u => u !== conduite);
        });
      },
    });
  }
  addConduite(): void {
    this.router.navigate(['conduite', 'new']);
  }
  private  edit(conduite: Conduite) {
    this.conduiteService.conduite = conduite;
    this.router.navigate(['conduite', 'edit']);
  }
}
