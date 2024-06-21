import { Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import { EventsComponent } from './events/events.component';
import { AddEventComponent } from './add-event/add-event.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'events',component:EventsComponent},
    {path:'add-event',component:AddEventComponent},
    {path:'error-page',component:ErrorPageComponent},
    {path:'',redirectTo:'/events',pathMatch:'full'}
];
