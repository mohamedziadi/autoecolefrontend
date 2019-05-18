import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {MessageService} from 'primeng/api';
import {SeanceService} from '../../../services/seance.service';


import {Seance} from '../../../model/seance';

@Component({
  selector: 'app-add-seance',
  templateUrl: './add-seance.component.html',
  styleUrls: ['./add-seance.component.css']
})
export class AddSeanceComponent implements OnInit {
  ngOnInit(): void {
  }


  /*private seance: Seance = new Seance();
  btnVisible = true;
  /* constructor(private formBuilder: FormBuilder, private router: Router, private seanceService: SeanceService,
               private messageService: MessageService) {
   }

   addForm: FormGroup;

   ngOnInit() {
     this.addForm = this.formBuilder.group({
      id:  [],
       date: ['', Validators.required],
       heure: ['', Validators.required],
       place: ['', Validators.required],
       prix: ['', Validators.required],
       nbHoraire: ['', Validators.required],
       nbSeanceAtteint: ['', Validators.required],
     });
   }
   onSubmit() {
     this.seanceService.save(this.addForm.value)
       .subscribe( data => {
         this.router.navigate(['seance']);
         this.messageService.add({severity: 'success', summary: 'Succes', detail: 'votre donnèe est bien enregistrer'});
         });
       }

  constructor(private messageService: MessageService, private seanceService: SeanceService,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const action = this.route.snapshot.paramMap.get('param');
    if (action === 'edit') {
      this.seance = this.seanceService.seance;
      this.btnVisible = false;
    }
  }
  ajouter() {
    this.seanceService.save(this.seance)
      .subscribe( data => {
        this.router.navigate(['seance']);
        this.messageService.add({severity: 'success', summary: 'Succes', detail: 'votre donnèe est bien enregistrer'});
      });
  }

  modifier() {
    this.seanceService.update(this.seance)
      .subscribe( data => {
      this.router.navigate(['seance']);
      this.messageService.add({severity: 'success', summary: 'Succes', detail: 'votre donnèe est bien enregistrer'});
    });
  }*/

}
