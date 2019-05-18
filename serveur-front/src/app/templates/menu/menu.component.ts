import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  nom: string;
  role: string;
  constructor(private authenticationService: AuthentificationService) { }

  ngOnInit() {
    this.authenticationService.getUser().subscribe( res => {
    this.nom = res.nom + ' ' + res.prenom ;
    }, ex => {
      console.log(ex);
    });
    this.role = this.authenticationService.getRoles();
  }

}
