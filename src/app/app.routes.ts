import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactmeComponent } from './components/contactme/contactme.component';
import { ProyectComponent } from './components/proyect/proyect.component';

import { RouterModule, Routes } from '@angular/router';

const app_routes: Routes = [
  { path: '', component: AboutmeComponent , data: { state: 'inicio' }},
  { path: 'sobre-mi', component: ProyectComponent, data: { state: 'sobre-mi' }},
  { path: 'habilidades', component: SkillsComponent, data: { state: 'habilidades' }}
];
export const app_routing = RouterModule.forRoot(app_routes);
