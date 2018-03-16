import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectComponent } from './components/proyect/proyect.component';
import { ReferencesComponent } from './components/references/references.component';
import { ContactmeComponent } from './components/contactme/contactme.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutmeComponent,
    SkillsComponent,
    ProyectComponent,
    ReferencesComponent,
    ContactmeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
