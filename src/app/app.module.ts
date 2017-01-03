import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LessonsAndClinicsComponent } from './lessons-and-clinics/lessons-and-clinics.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TeamsComponent } from './teams/teams.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    AboutComponent,
    LessonsAndClinicsComponent,
    CalendarComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
