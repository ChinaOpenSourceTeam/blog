import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FrontEndComponent } from './front-end.component';

const frontEnd: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: FrontEndComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(frontEnd)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class FrontEndRoutingModule { }
