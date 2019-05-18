import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {Admin} from '../../model/admin';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private list: Admin[];
  constructor(private  adminService: AdminService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService, private router: Router) { }

  ngOnInit() {
    this.adminService.getAll().subscribe(data => {
      this.list = data;
    });
}
  private delete(admin: Admin) {

    this.confirmationService.confirm({
      message: 'Veuillez-vous supprimer cet enregistement?',
      accept: () => {

        this.adminService.delete(admin.cin).subscribe(result => {

          if (result.success) {
            this.messageService.add({severity: 'success', summary: result.message});
            this.list = this.list.filter(obj => obj !== admin);
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
  addAdmin(): void {
    this.router.navigate(['admin', 'new']);
  }
  private  edit(admin: Admin) {
    this.adminService.admin = admin;
    this.router.navigate(['admin', 'edit']);
  }
}
