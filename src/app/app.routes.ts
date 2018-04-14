import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactmeComponent } from './components/contactme/contactme.component';
import { ProyectComponent } from './components/proyect/proyect.component';

import { RouterModule, Routes } from '@angular/router';

const app_routes: Routes = [
  { path: '', component: AboutmeComponent},
  { path: 'sobre-mi', component: ProyectComponent},
  { path: 'habilidades', component: SkillsComponent},
  { path: 'contacto', component: ContactmeComponent}
];
const app_routing = RouterModule.forRoot(app_routes);
export default app_routing;