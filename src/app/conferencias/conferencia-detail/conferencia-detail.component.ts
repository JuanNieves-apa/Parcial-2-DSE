import { Component, Input, OnInit } from '@angular/core';
import { Conferencia } from '../Conferencia';

@Component({
  selector: 'app-conferencia-detail',
  templateUrl: './conferencia-detail.component.html',
  styleUrls: ['./conferencia-detail.component.css']
})
export class ConferenciaDetailComponent implements OnInit {

  @Input() conferencia: any;

  constructor() { }

  ngOnInit() {
  }

}
