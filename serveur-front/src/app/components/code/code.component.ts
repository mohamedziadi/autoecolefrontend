import { Component, OnInit } from '@angular/core';
import {Code} from '../../model/code';
import {CodeService} from '../../services/code.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {AuthentificationService} from "../../services/authentification.service";


@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  private list: Code[];

  constructor(private  codeService: CodeService, private confirmationService: ConfirmationService,
              private router: Router,  private authenticationService: AuthentificationService) { }

  ngOnInit() {
    this.authenticationService.getUser().subscribe( res => {
      this.codeService.getByAutoEcole(res.autoEcole.id).subscribe(data => {
        this.list = data;
      });

    }, ex => {
      console.log(ex);
    });


  }


delete(code: Code)  {
    this.confirmationService.confirm({
      message: 'Veuillez-vous supprimer cet enregistement?',
      accept: () => {
        this.codeService.delete(code.id).subscribe(result => {
          this.list = this.list.filter(u => u !== code);
        });
      },
    });
  }
addCode()  {
    this.router.navigate(['code', 'new']);
  }
    edit(code: Code) {
    this.codeService.code = code;
    this.router.navigate(['code', 'edit']);
  }




}
