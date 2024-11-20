import { Component, OnInit } from '@angular/core';
import { Conferencia } from './Conferencia';
import { ConferenciaService } from './conferencia.service';

@Component({
  selector: 'app-conferencias',
  templateUrl: './conferencias.component.html',
  styleUrls: ['./conferencias.component.css']
})
export class ConferenciasComponent implements OnInit {
  selectedConferencia: any;

  constructor(private conferenciaService: ConferenciaService) { }
  conferencias: Array<Conferencia> | undefined;
  getConferencias() {
    this.conferenciaService.getConferencias().subscribe(conferencias => this.conferencias = conferencias);
  }
  ngOnInit() {
    this.getConferencias();
  }

  contarConferenciasProximas() {
    return this.conferencias?.filter(conferencia => new Date(conferencia.starts) > new Date()).length;
  }
  seleccionarConferencia(conferencia: any): void {
    this.selectedConferencia = conferencia;
  }

  

}
