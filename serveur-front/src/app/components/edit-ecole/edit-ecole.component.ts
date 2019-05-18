import { Component, OnInit } from '@angular/core';
import {AutoEcoleService} from '../../services/auto-ecole.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {AutoEcole} from '../../model/auto-ecole';

@Component({
  selector: 'app-edit-ecole',
  templateUrl: './edit-ecole.component.html',
  styleUrls: ['./edit-ecole.component.css']
})
export class EditEcoleComponent implements OnInit {
  private auto: AutoEcole;

  constructor( private autoService: AutoEcoleService, private confirmationService: ConfirmationService,
               private messageService: MessageService, private router: Router) { }

  ngOnInit() {
  }
}
