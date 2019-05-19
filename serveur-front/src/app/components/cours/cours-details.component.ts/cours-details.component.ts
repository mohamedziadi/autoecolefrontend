import {Component, Input, OnInit} from "@angular/core";
import {Cours} from "../../../model/cours";

@Component({
  selector: 'app-cours-details',
  templateUrl: './cours-details.component.html',
  styleUrls: ['./cours-details.component.css']
})
export class CoursDetailsComponent implements OnInit {

  @Input() cours : Cours = {};
  constructor() {
  }
  ngOnInit() {

  }

}
