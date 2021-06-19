import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { TasksPageComponent } from './components/tasks-page/tasks-page.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { TasksEffects } from './store/effects/tasks.effects';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './components/tasks-page/task/task.component';
import { AppReducer } from './store/reducers/app.reducers';
import { CreateTaskComponent } from './components/tasks-page/create-task/create-task.component';
import { FormsModule } from '@angular/forms';
import { RequestStatusComponent } from './components/tasks-page/request-status/request-status.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, TasksPageComponent, TaskComponent, CreateTaskComponent, RequestStatusComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot([TasksEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
