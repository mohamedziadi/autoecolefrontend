import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../../services/authentification.service";
import {MessageService} from "primeng/api";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-change-pwd',
  templateUrl: './change-pwd.component.html',
  styleUrls: ['./change-pwd.component.css']
})
export class ChangePwdComponent implements OnInit {
  pwd: any = {cin: '', oldPassword: '' , newPassword: '' , confirmPassword: ''};
  constructor(private userService: UsersService, private messageService: MessageService,
              private authenticationService: AuthentificationService) { }

  ngOnInit() {
  }

  changePwd() {
    this.authenticationService.getUser().subscribe( result => {
      this.pwd.cin = result.cin;
      this.userService.changePassword(this.pwd).subscribe( res => {
        if (res.success) {
          this.messageService.add({severity: 'success', summary: res.message });
        } else {
          this.messageService.add({severity: 'warn', summary: res.message });
        }
      }, ex => {
        this.messageService.add({severity: 'error', summary: 'Erreur de modification' });
        console.log(ex);
      } );
    });
  }
}
