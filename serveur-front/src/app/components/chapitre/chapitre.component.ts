import {Component, Input, OnInit} from '@angular/core';
import {Chapitre} from "../../model/chapitre";
import {AddOrUpdateCoursComponent} from "../cours/add-or-update-cours/add-or-update.component";
import {Cours} from "../../model/cours";
import {ConfirmationService} from "primeng/api";
import {Router} from "@angular/router";
import {CoursService} from "../../services/cours.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ChapitreService} from "../../services/chapitre.service";
import {AddOrUpdateChapitreComponent} from "./add-or-update-chapitre/add--or-update-chapitre.component";

@Component({
  selector: 'app-chapitre',
  templateUrl: './chapitre.component.html',
  styleUrls: ['./chapitre.component.css']
})
export class ChapitreComponent implements OnInit {
@Input() chapitres: Chapitre[] = [];
@Input() idCrs:number;
  constructor(private  chapitreService: ChapitreService,private coursService: CoursService, private confirmationService: ConfirmationService, private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
  }

  private openAddChapitre() {
    const modalRef = this.modalService.open(
      AddOrUpdateChapitreComponent,
      { size: 'lg', windowClass: 'in', backdrop: 'static' }
    );
    modalRef.componentInstance.isUpdate = false;
    modalRef.result.then(
      (resp) => {
        let chapitre:Chapitre = {description:resp.description,nom:resp.nom};
        this.chapitreService.save({chapitre:chapitre,idCrs:this.idCrs}).subscribe(data => {
          this.chapitres.push(data);
          this.chapitres = this.chapitres.splice(0);
        });
      },
      (err) => console.log('error', err)
    );

  }
  public update(chapitre:Chapitre,index){
    const modalRef = this.modalService.open(
      AddOrUpdateChapitreComponent,
      { size: 'lg', windowClass: 'in', backdrop: 'static' }
    );
    modalRef.componentInstance.isUpdate = true;
    modalRef.componentInstance.selectedRow = chapitre;
    modalRef.result.then(
      (resp) => {
        let chapitre:Chapitre = {idChap:resp.idChap,
          description:resp.description,
          nom:resp.nom};
        this.chapitreService.update(chapitre,chapitre.idChap).subscribe(data => {
          this.chapitres.splice(index,1,data);
          this.chapitres = this.chapitres.splice(0);
        });
      },
      (err) => console.log('error', err)
    );

  }

  public delete(id,index){
    this.chapitreService.delete(id).subscribe(data => {
      this.chapitres.splice(index,1);
      this.chapitres = this.chapitres.splice(0);
    });
  }

  public returnView(event: any) {
    this.router.navigate(['cours']);
  }
}
