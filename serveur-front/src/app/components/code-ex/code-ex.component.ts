import { Component, OnInit } from '@angular/core';

import {ConfirmationService} from "primeng/api";
import {Router} from "@angular/router";
import {AuthentificationService} from "../../services/authentification.service";
import {CodeExService} from "../../services/code-ex.service";
import {CodeEx} from "../../model/code-ex";


@Component({
  selector: 'app-code-ex',
  templateUrl: './code-ex.component.html',
  styleUrls: ['./code-ex.component.css']
})
export class CodeExComponent implements OnInit {

  private list: CodeEx[];

  constructor(private  codeExService: CodeExService, private confirmationService: ConfirmationService,
              private router: Router,  private authenticationService: AuthentificationService) { }

  ngOnInit() {
    this.authenticationService.getUser().subscribe( res => {
      this.codeExService.getByAutoEcole(res.autoEcole.id).subscribe(data => {
        this.list = data;
      });

    }, ex => {
      console.log(ex);
    });


  }


  delete(codeEx: CodeEx)  {
    this.confirmationService.confirm({
      message: 'Veuillez-vous supprimer cet enregistement?',
      accept: () => {
        this.codeExService.delete(codeEx.id).subscribe(result => {
          this.list = this.list.filter(u => u !== codeEx);
        });
      },
    });
  }
  addCodeEx()  {
    this.router.navigate(['codeEx', 'new']);
  }
  edit(codeEx: CodeEx) {
    this.codeExService.codeEx = codeEx;
    this.router.navigate(['codeEx', 'edit']);
  }




}
