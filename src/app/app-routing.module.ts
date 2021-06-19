import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TasksPageComponent} from "./components/tasks-page/tasks-page.component";


const routes: Routes = [
  {
    path: '',
    component: TasksPageComponent
  },
  {
    path: '**',
    component: TasksPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
