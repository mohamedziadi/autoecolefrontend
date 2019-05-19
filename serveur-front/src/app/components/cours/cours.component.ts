import {Component, OnInit, ViewChild} from '@angular/core';
import {Seance} from '../../model/seance';
import {SeanceService} from '../../services/seance.service';
import {ConfirmationService} from 'primeng/api';
import {ActivatedRoute, Router} from '@angular/router';
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
  public isDetail: boolean = false;
  public selectedEntity:any;
  public routerSubscription: any;

  constructor(private  coursService: CoursService,
              private confirmationService: ConfirmationService,
              private router: Router,
              private modalService: NgbModal,
              protected activateRoute: ActivatedRoute) {
    this.subscribeToRouter();
  }

  ngOnInit() {
    this.coursService.getAll().subscribe(data => {
      this.list = data;
    });
  }

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
    this.coursService.delete(id).subscribe(data => {
      this.list.splice(index,1);
      this.list = this.list.splice(0);
    });
  }
  loadDataOnScroll(event){
    console.log(event);
  }

  public loadChapters(event){
    this.router.navigate(['cours', event.data.idCrs]);
  }


  public returnView(event: any) {
    this.router.navigate(['cours']);
  }


  private subscribeToRouter() {
    this.routerSubscription = this.activateRoute.params;
    if (this.activateRoute.params['value']['idCours']) {
      this.isDetail = true;
/*      this.routerSubscription
        .map(params => params['idCours'])
        .switchMap(params => this.coursService.getByid(params))
        .subscribe(entity => {
          this.selectedEntity = entity;
        });*/
      this.coursService.getByid((this.activateRoute.params['value']['idCours']))
    .subscribe(entity => {
        this.selectedEntity = entity;
      });
    } else {
      this.isDetail = false;
    }
  }

  public ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }

  }


}
