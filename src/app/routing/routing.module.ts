import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { LessonsAndClinicsComponent } from '../lessons-and-clinics/lessons-and-clinics.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { TeamsComponent } from '../teams/teams.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'lessons-and-clinics', component: LessonsAndClinicsComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'teams', component: TeamsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
