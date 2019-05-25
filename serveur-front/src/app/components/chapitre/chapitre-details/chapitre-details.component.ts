import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-chapitre-details',
  templateUrl: './chapitre-details.component.html',
  styleUrls: ['./chapitre-details.component.css']
})
export class ChapitreDetailsComponent implements OnInit {
  @Input() chapitresDetail : any;
  ngOnInit() {
  }


}
