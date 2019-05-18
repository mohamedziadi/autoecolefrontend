import { Component, OnInit } from '@angular/core';
import {Conduite} from '../../../model/conduite';
import {MessageService} from 'primeng/api';
import {ConduiteService} from '../../../services/conduite.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-conduite',
  templateUrl: './add-conduite.component.html',
  styleUrls: ['./add-conduite.component.css']
})
export class AddConduiteComponent implements OnInit {

  private conduite: Conduite = new Conduite();
 btnVisible = true;
  constructor(private messageService: MessageService, private conduiteService: ConduiteService,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const action = this.route.snapshot.paramMap.get('param');
    if (action === 'edit') {
      this.conduite = this.conduiteService.conduite;
      this.btnVisible = false;
    }
  }
  ajouter() {
    this.conduiteService.save(this.conduite)
      .subscribe( data => {
        this.router.navigate(['conduite']);
        this.messageService.add({severity: 'success', summary: 'Succes', detail: 'votre donnèe est bien enregistrer'});
      });
  }

  modifier() {
    this.conduiteService.update(this.conduite)
      .subscribe( data => {
        this.router.navigate(['conduite']);
        this.messageService.add({severity: 'success', summary: 'Succes', detail: 'votre donnèe est bien enregistrer'});
      });
  }

}
