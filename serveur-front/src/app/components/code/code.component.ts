import { Component, OnInit } from '@angular/core';
import {Code} from '../../model/code';
import {CodeService} from '../../services/code.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';


@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  events: any[] = [];
  private list: Code[];
  options: any;
  constructor(private  codeService: CodeService, private confirmationService: ConfirmationService, private router: Router) { }

  ngOnInit() {

    this.options = {
      defaultDate: '2019-05-01',
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      editable: true
    };


    this.events = [
      {
        title: 'All Day Event',
        start: '2016-01-01'
      },
      {
        title: 'Long Event',
        start: '2016-01-07',
        end: '2016-01-10'
      },
      {
        title: 'Repeating Event',
        start: '2016-01-09T16:00:00'
      },
      {
        title: 'Repeating Event',
        start: '2016-01-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2016-01-11',
        end: '2016-01-13'
      }
    ];

    this.codeService.getAll().subscribe(data => {
      this.list = data;
    });
  }


delete(code: Code)  {
    this.confirmationService.confirm({
      message: 'Veuillez-vous supprimer cet enregistement?',
      accept: () => {
        this.codeService.delete(code.id).subscribe(result => {
          this.list = this.list.filter(u => u !== code);
        });
      },
    });
  }
addCode()  {
    this.router.navigate(['code', 'new']);
  }
    edit(code: Code) {
    this.codeService.code = code;
    this.router.navigate(['code', 'edit']);
  }




}
