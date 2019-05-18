import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {MessageService} from 'primeng/api';
import {ExamenService} from '../../../services/examen.service';


@Component({
  selector: 'app-add-examen',
  templateUrl: './add-examen.component.html',
  styleUrls: ['./add-examen.component.css']
})
export class AddExamenComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private examenService: ExamenService,
              private messageService: MessageService) {
  }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id:  [],
      categorie: ['', Validators.required],
      numConvocation: ['', Validators.required],
      centreExamen: ['', Validators.required],
    fraisInscription: ['', Validators.required],
      resultat: ['', Validators.required],
      type: ['', Validators.required],
      prix: ['', Validators.required],

      date: ['', Validators.required],
      createdAt: ['', Validators.required],
      updatedAt: ['', Validators.required],
    });
  }
  onSubmit() {
    this.examenService.save(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['examen']);
        this.messageService.add({severity: 'success', summary: 'Succes', detail: 'votre donnèe est bien enregistrer'});
      });
  }


}
