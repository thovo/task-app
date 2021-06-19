import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskModel } from 'src/app/models/task.interface';
import {updateTask, deleteTask} from "../../../store/actions/tasks.actions";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: TaskModel = {name: '', id: ''};
  isEditActive: boolean = false;
  taskName: string = '';

  constructor(private store: Store) {}

  ngOnInit(): void {}

  deleteTask(taskId: string) {
    this.store.dispatch(deleteTask({ taskId }));
  }

  editTask() {
    this.isEditActive = true;
    this.taskName = this.task.name;
  }

  saveTask() {
    this.isEditActive = false;
    this.store.dispatch(updateTask({taskId: this.task.id, taskName: this.taskName}));
  }

  cancel() {
    this.isEditActive = false;
  }
}
