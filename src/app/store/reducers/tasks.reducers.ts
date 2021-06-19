import {Action, createReducer, on} from "@ngrx/store";
import {initialState, TasksState} from "../states/tasks.state";
import {
  createTask,
  createTaskFailure,
  createTaskSuccess,
  deleteTask, deleteTaskFailure, deleteTaskSuccess,
  getTasks,
  getTasksSuccess, updateTask, updateTaskFailure, updateTaskSuccess
} from "../actions/tasks.actions";
import {TaskModel} from "../../models/task.interface";

const tasksReducers = createReducer(
  initialState,
  on(getTasks, (state) => ({...state, isLoading: true})),
  on(getTasksSuccess, (state, {tasks}) => ({...state, tasks, isLoading: false})),
  on(
    createTask,
    updateTask,
    deleteTask,
    (state) => ({...state})
  ),
  on(createTaskSuccess, (state, {task}) => {
    let tasks: TaskModel[] = JSON.parse(JSON.stringify(state.tasks));
    if (!tasks) {
      tasks = [];
    }
    tasks.push(task);
    return {...state, tasks, requestStatus: ''};
  }),
  on(deleteTaskSuccess, (state, {task}) => {
    let tasks: TaskModel[] = JSON.parse(JSON.stringify(state.tasks));
    if (!tasks) {
      tasks = [];
    }
    tasks.splice(tasks.findIndex(t => t.id === task.id), 1);
    return {...state, tasks, requestStatus: ''};
  }),
  on(updateTaskSuccess, (state, {task}) => {
    let tasks: TaskModel[] = JSON.parse(JSON.stringify(state.tasks));
    if (!tasks) {
      tasks = [];
    }
    tasks[tasks.findIndex(t => t.id === task.id)] = task;
    return {...state, tasks, requestStatus: ''};
  }),
  on(
    updateTaskFailure,
    deleteTaskFailure,
    createTaskFailure,
    (state, {requestStatus}) => ({...state, requestStatus})
  ),
);

export function reducer(state: TasksState | undefined, action: Action): TasksState {
  return tasksReducers(state, action);
}

