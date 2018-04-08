import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactmeComponent } from './components/contactme/contactme.component';

import { RouterModule, Routes } from '@angular/router';

const app_routes: Routes = [
    { path: '', component: AboutmeComponent},
    { path: 'habilidades', component: SkillsComponent},
    { path: 'contacto', component: ContactmeComponent}
  ];
  export const app_routing = RouterModule.forRoot(app_routes);