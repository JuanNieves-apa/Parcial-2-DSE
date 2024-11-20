import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenciasComponent } from './conferencias.component';
import { ConferenciaDetailComponent } from './conferencia-detail/conferencia-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConferenciasComponent, ConferenciaDetailComponent],
  exports: [ConferenciasComponent]
})
export class ConferenciasModule { }
