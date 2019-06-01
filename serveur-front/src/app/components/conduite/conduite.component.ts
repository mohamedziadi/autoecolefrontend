import { Component, OnInit } from '@angular/core';
import {Conduite} from '../../model/conduite';
import {ConduiteService} from '../../services/conduite.service';
import {ConfirmationService} from 'primeng/api';
import {Router} from '@angular/router';

import {AuthentificationService} from "../../services/authentification.service";

@Component({
  selector: 'app-conduite',
  templateUrl: './conduite.component.html',
  styleUrls: ['./conduite.component.css']
})
export class ConduiteComponent implements OnInit {
  private list: Conduite[];

  constructor(private  conduiteService: ConduiteService, private confirmationService: ConfirmationService,
              private router: Router,  private authenticationService: AuthentificationService) { }

  ngOnInit() {
    this.authenticationService.getUser().subscribe( res => {
      this.conduiteService.getByAutoEcole(res.autoEcole.id).subscribe(data => {
        this.list = data;
      });

    }, ex => {
      console.log(ex);
    });


  }


  delete(conduite: Conduite)  {
    this.confirmationService.confirm({
      message: 'Veuillez-vous supprimer cet enregistement?',
      accept: () => {
        this.conduiteService.delete(conduite.id).subscribe(result => {
          this.list = this.list.filter(u => u !== conduite);
        });
      },
    });
  }
  addConduite()  {
    this.router.navigate(['conduite', 'new']);
  }
  edit(conduite: Conduite) {
    this.conduiteService.conduite = conduite;
    this.router.navigate(['conduite', 'edit']);
  }




}
