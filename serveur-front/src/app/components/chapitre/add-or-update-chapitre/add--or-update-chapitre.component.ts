import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-chapitre',
  templateUrl: './add--or-update-chapitre.component.html',
  styleUrls: ['./add--or-update-chapitre.component.css']
})
export class AddOrUpdateChapitreComponent implements OnInit {

  private formGroup : FormGroup;
  @Input()isUpdate:boolean;
  @Input()selectedRow:any;

  constructor(
    public activeModal: NgbActiveModal,public fb:FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      idChap: new FormControl(),
      nom: new FormControl(),
      description: new FormControl(),
    });

    if (this.isUpdate == true){
      this.formGroup.patchValue({
        idChap:this.selectedRow.idCrs,
        nom:this.selectedRow.nom,
        description:this.selectedRow.description
      })
    }
  }

  submitForm() {
    this.activeModal.close(this.formGroup.value); //It closes successfully
  }

  ngOnDestroy(): void {
    console.log("fdfd");
  }

}
