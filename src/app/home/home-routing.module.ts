import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeListComponent } from './home-list/home-list.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home-list',
        component: HomeListComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    HomeListComponent
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
