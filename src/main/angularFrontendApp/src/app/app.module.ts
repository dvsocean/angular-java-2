import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControllerComponent } from './controller/controller.component';
import { TaskComponent } from './task/task.component';
import { TasksListComponent } from './task/tasks-list/tasks-list.component';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ControllerComponent,
    TaskComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Http, HttpClientModule, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
