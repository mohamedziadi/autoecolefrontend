import {Component, OnInit, ViewChild} from '@angular/core';
import {Seance} from '../../model/seance';
import {SeanceService} from '../../services/seance.service';
import {ConfirmationService} from 'primeng/api';
import {Router} from '@angular/router';
import {Cours} from '../../model/cours';
import {CoursService} from '../../services/cours.service';
import {DataTable} from "primeng/primeng";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddOrUpdateCoursComponent} from "./add-or-update-cours/add-or-update.component";

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  public list: Cours[]=[];
  @ViewChild('table') dataTable: DataTable;
  public totalRecords:number = 20;
  constructor(private  coursService: CoursService, private confirmationService: ConfirmationService, private router: Router, private modalService: NgbModal,) {
  }

  ngOnInit() {
    this.coursService.getAll().subscribe(data => {
      this.list = data;
    });
  }


 /* delete(cours: Cours): void {
    this.confirmationService.confirm({
      message: 'Veuillez-vous supprimer cet enregistement?',
      accept: () => {
        let currentValue = this.list.find(element => element.idCrs === cours.idCrs);
        const index = this.list.indexOf(currentValue);
        this.coursService.delete(cours.idCrs).subscribe(result => {
          this.list.splice(index,1);
        });
      },
    });
  }*/

  private openAddCours() {
    const modalRef = this.modalService.open(
      AddOrUpdateCoursComponent,
      { size: 'lg', windowClass: 'in', backdrop: 'static' }
    );
    modalRef.componentInstance.isUpdate = false;
    modalRef.result.then(
      (resp) => {
        let cours:Cours = {description:resp.description,nom:resp.nom};
        this.coursService.save(cours).subscribe(data => {
          this.list.push(data);
          this.list = this.list.splice(0);
        });
      },
      (err) => console.log('error', err)
    );

  }
  public update(cours:Cours,index){
    const modalRef = this.modalService.open(
      AddOrUpdateCoursComponent,
      { size: 'lg', windowClass: 'in', backdrop: 'static' }
    );
    modalRef.componentInstance.isUpdate = true;
    modalRef.componentInstance.selectedRow = cours;
    modalRef.result.then(
      (resp) => {
        let cours:Cours = {idCrs:resp.idCrs,
                           description:resp.description,
                           nom:resp.nom};
        this.coursService.update(cours,cours.idCrs).subscribe(data => {
          this.list.splice(index,1,data);
          this.list = this.list.splice(0);
        });
      },
      (err) => console.log('error', err)
    );

  }

  public delete(id,index){
    console.log(id);
    this.coursService.delete(id).subscribe(data => {
      this.list.splice(index,1);
      this.list = this.list.splice(0);
    });
  }
  loadDataOnScroll(event){
    console.log("dsdsd");
  }
}
