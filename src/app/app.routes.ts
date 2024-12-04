import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';


export const routes: Routes = [
  { path: '', component: HeroComponent },       // Default route
  { path: 'about', component: AboutComponent }, // Route for AboutComponent
  { path: 'skills', component: SkillsComponent }, // Route for SkillsComponent
  { path: '**', redirectTo: '' }                // Wildcard route for undefined paths
];

