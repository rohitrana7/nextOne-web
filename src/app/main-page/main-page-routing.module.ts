import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDumpComponent } from './contact-dump/contact-dump.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'careers', component: CareersComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact-dump', component: ContactDumpComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
