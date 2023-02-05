import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';

import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactDumpComponent } from './contact-dump/contact-dump.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CareersComponent,
    ContactComponent,
    ServicesComponent,
    AboutComponent,
    ContactDumpComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MaterialModule,

    ReactiveFormsModule
  ]
})
export class MainPageModule { }
