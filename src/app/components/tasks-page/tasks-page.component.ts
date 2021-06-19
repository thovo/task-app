import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable, of} from "rxjs";
import {getTasks} from "../../store/actions/tasks.actions";
import {TaskModel} from "../../models/task.interface";
import {selectTasks} from "../../store/selectors/tasks.selectors";
import {AppState} from "../../store/states/app.state";

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit {

  tasks$: Observable<TaskModel[] | undefined> = of([]);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.tasks$ = this.store.select(selectTasks);
    this.store.dispatch(getTasks());
  }

}
