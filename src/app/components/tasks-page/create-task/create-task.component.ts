import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/states/app.state';
import {createTask} from "../../../store/actions/tasks.actions";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent {
  taskName: string = '';
  constructor(private store: Store<AppState>) {}

  createTask() {
    this.store.dispatch(createTask({taskName: this.taskName}));
  }
}
