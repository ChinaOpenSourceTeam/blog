import { RouterModule, Routes } from '@angular/router';
import { PuzzleComponent } from './puzzle.component';


const puzzleRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PuzzleComponent
      }
    ]
  }
];

export const PuzzleRoutesModule = RouterModule.forChild(puzzleRoutes);
