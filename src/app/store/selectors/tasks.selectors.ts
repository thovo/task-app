import { createSelector } from '@ngrx/store';
import {TasksState} from "../states/tasks.state";
import {getTasksState} from "../states/app.state";

export const getState = createSelector(
  getTasksState,
  (state: TasksState) => state
);

export const selectTasks = createSelector(
  getState,
  (state: TasksState) => state.tasks
);

export const selectRequestStatus = createSelector(
  getState,
  (state: TasksState) => state.requestStatus
)
