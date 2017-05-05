import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BackstageComponent } from './backstage/backstage.component';
import { OthersComponent } from './others/others.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'front-end', loadChildren: 'app/front-end/front-end.module#FrontEndModule' },
  { path: 'backstage', component: BackstageComponent },
  { path: 'others', component: OthersComponent },
  { path: 'unkonwn', loadChildren: './unkonwn/unkonwn.module#UnkonwnModule' },
  { path: 'puzzle', loadChildren: './puzzle/puzzle.module#PuzzleModule' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
