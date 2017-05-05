import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnkonwnComponent } from './unkonwn.component';
import { UnkonwnRoutingModule } from './unkonwn-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UnkonwnRoutingModule
  ],
  declarations: [UnkonwnComponent],
  exports: [
    UnkonwnRoutingModule
  ]
})
export class UnkonwnModule { }
