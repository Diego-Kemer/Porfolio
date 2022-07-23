import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { EducationComponent } from './components/education/education.component';
import { ItemEducationComponent } from './components/item-education/item-education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ItemSkillComponent } from './components/item-skill/item-skill.component';
import { WorksComponent } from './components/works/works.component';
import { ItemWorkComponent } from './components/item-work/item-work.component';
import { NavegationComponent } from './components/navegation/navegation.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FormUserComponent } from './components/form-user/form-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormExpWorkComponent } from './components/form-exp-work/form-exp-work.component';
import { FormAboutComponent } from './components/form-about/form-about.component';
import { FormEducationComponent } from './components/form-education/form-education.component';
import { WorkCarouselComponent } from './components/work-carousel/work-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    WorkExperienceComponent,
    ExperiencesComponent,
    EducationComponent,
    ItemEducationComponent,
    SkillsComponent,
    ItemSkillComponent,
    WorksComponent,
    ItemWorkComponent,
    NavegationComponent,
    FormUserComponent,
    FormExpWorkComponent,
    FormAboutComponent,
    FormEducationComponent,
    WorkCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
