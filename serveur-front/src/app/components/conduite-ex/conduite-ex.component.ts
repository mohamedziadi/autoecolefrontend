import { Component, OnInit } from '@angular/core';

import {ConfirmationService} from "primeng/api";
import {Router} from "@angular/router";
import {AuthentificationService} from "../../services/authentification.service";
import {ConduiteEx} from "../../model/conduite-ex";
import {ConduiteExService} from "../../services/conduite-ex.service";

@Component({
  selector: 'app-conduite-ex',
  templateUrl: './conduite-ex.component.html',
  styleUrls: ['./conduite-ex.component.css']
})
export class ConduiteExComponent implements OnInit {

  private list: ConduiteEx[];

  constructor(private  conduiteExService: ConduiteExService, private confirmationService: ConfirmationService,
              private router: Router,  private authenticationService: AuthentificationService) { }

  ngOnInit() {
    this.authenticationService.getUser().subscribe( res => {
      this.conduiteExService.getByAutoEcole(res.autoEcole.id).subscribe(data => {
        this.list = data;
      });

    }, ex => {
      console.log(ex);
    });


  }


  delete(conduiteEx: ConduiteEx)  {
    this.confirmationService.confirm({
      message: 'Veuillez-vous supprimer cet enregistement?',
      accept: () => {
        this.conduiteExService.delete(conduiteEx.id).subscribe(result => {
          this.list = this.list.filter(u => u !== conduiteEx);
        });
      },
    });
  }
  addConduiteEx()  {
    this.router.navigate(['conduiteEx', 'new']);
  }
  edit(conduiteEx: ConduiteEx) {
    this.conduiteExService.conduiteEx = conduiteEx;
    this.router.navigate(['conduiteEx', 'edit']);
  }




}
