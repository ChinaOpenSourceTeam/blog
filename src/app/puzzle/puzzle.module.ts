import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuzzleComponent } from './puzzle.component';
import { PuzzleRoutesModule } from './puzzle.routes';

@NgModule({
  imports: [
    CommonModule,
    PuzzleRoutesModule
  ],
  declarations: [PuzzleComponent]
})
export class PuzzleModule { }
