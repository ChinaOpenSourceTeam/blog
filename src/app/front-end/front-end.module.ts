import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontEndComponent } from './front-end.component';
import { FrontEndRoutingModule } from './front-end-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FrontEndRoutingModule
  ],
  declarations: [
    FrontEndComponent
  ],
  exports: [
    FrontEndRoutingModule
  ]
})

export class FrontEndModule { }
