import {TasksState} from "./tasks.state";

export interface AppState {
  tasks: TasksState;
}

export const getTasksState = (appState: AppState) => {
  return appState.tasks;
};

