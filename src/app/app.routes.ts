import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';

export const routes: Routes = [
  { path: '', component: HeroComponent }, // Default route
  { path: '**', redirectTo: '' } // Wildcard route for undefined paths
];
