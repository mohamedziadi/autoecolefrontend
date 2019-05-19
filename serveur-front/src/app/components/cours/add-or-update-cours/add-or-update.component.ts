import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-or-update-cours',
  templateUrl: './add-or-update.component.html',
  styleUrls: ['./add-or-update.component.css']
})
export class AddOrUpdateCoursComponent implements OnInit,OnDestroy{
 private formGroup : FormGroup;
 @Input()isUpdate:boolean;
 @Input()selectedRow:any;

  constructor(
    public activeModal: NgbActiveModal,public fb:FormBuilder
  ) {
  }

  ngOnInit(): void {
      this.formGroup = this.fb.group({
        idCrs: new FormControl(),
        nom: new FormControl(),
        description: new FormControl(),
      });

   if (this.isUpdate == true){
      this.formGroup.patchValue({
        idCrs:this.selectedRow.idCrs,
        nom:this.selectedRow.nom,
        description:this.selectedRow.description
      })
    }
   }

  submitForm() {
    this.activeModal.close(this.formGroup.value); //It closes successfully
  }

  ngOnDestroy(): void {
    console.log("ondestroy";
  }
}
