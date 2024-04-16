import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InstalationsPageComponent } from './pages/instalations-page/instalations-page.component';
import { ProgramsPageComponent } from './pages/programs-page/programs-page.component';
import { FormsModule } from '@angular/forms';
import { ActivitiesPageComponent } from './pages/activities-page/activities-page.component';


@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    InstalationsPageComponent,
    ProgramsPageComponent,
    ActivitiesPageComponent

  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    FormsModule
  ]
})
export class ContentModule { }
