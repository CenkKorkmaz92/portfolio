import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
  { path: '', component: HeroComponent },       // Default route
  { path: 'about', component: AboutComponent }, // Route for AboutComponent
  { path: 'skills', component: SkillsComponent }, // Route for SkillsComponent
  { path: 'portfolio', component: PortfolioComponent }, // Route for PortfolioComponent
  { path: 'comments', component: CommentsComponent }, // Route for CommentsComponent
  { path: 'contact', component: ContactComponent }, // Route for ContactComponent
  { path: 'footer', component: ContactComponent }, // Route for FooterComponent
  { path: '**', redirectTo: '' }                // Wildcard route for undefined paths
];

