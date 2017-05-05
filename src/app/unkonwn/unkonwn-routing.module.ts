import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UnkonwnComponent } from './unkonwn.component';

const UnkonwRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UnkonwnComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UnkonwRoutes)
  ],
  declarations: [
  ],
  exports: [
    RouterModule
  ]
})
export class UnkonwnRoutingModule { }
