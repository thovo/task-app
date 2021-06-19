import { createAction, props } from '@ngrx/store';
import { TaskModel } from '../../models/task.interface';

export enum TasksActionTypes {
  GET_TASKS = '[GET TASKS]',
  GET_TASKS_SUCCESS = '[GET TASKS] Success',
  GET_TASKS_FAILURE = '[GET TASKS] Failure',
  GET_TASK = '[GET TASK]',
  GET_TASK_SUCCESS = '[GET TASK] Success',
  GET_TASK_FAILURE = '[GET TASK] Failure',
  CREATE_TASK = '[CREATE TASK]',
  CREATE_TASK_SUCCESS = '[CREATE TASK] Success',
  CREATE_TASK_FAILURE = '[CREATE TASK] Failure',
  UPDATE_TASK = '[UPDATE TASK]',
  UPDATE_TASK_SUCCESS = '[UPDATE TASK] Success',
  UPDATE_TASK_FAILURE = '[UPDATE TASK] Failure',
  DELETE_TASK = '[DELETE TASK]',
  DELETE_TASK_SUCCESS = '[DELETE TASK] Success',
  DELETE_TASK_FAILURE = '[DELETE TASK] Failure',
}


export const getTasks = createAction(TasksActionTypes.GET_TASKS);
export const getTasksSuccess = createAction(TasksActionTypes.GET_TASKS_SUCCESS, props<{tasks: TaskModel[]}>());
export const getTasksFailure = createAction(TasksActionTypes.GET_TASKS_FAILURE, props<{requestStatus: string}>());

export const getTask = createAction(TasksActionTypes.GET_TASK, props<{taskId: string}>());
export const getTaskSuccess = createAction(TasksActionTypes.GET_TASK_SUCCESS, props<any>());
export const getTaskFailure = createAction(TasksActionTypes.GET_TASK_FAILURE, props<{requestStatus: string}>());

export const createTask = createAction(TasksActionTypes.CREATE_TASK, props<{taskName: string}>());
export const createTaskSuccess = createAction(TasksActionTypes.CREATE_TASK_SUCCESS, props<{task: TaskModel}>());
export const createTaskFailure = createAction(TasksActionTypes.CREATE_TASK_FAILURE, props<{requestStatus: string}>());

export const updateTask = createAction(TasksActionTypes.UPDATE_TASK, props<{taskId: string, taskName: string}>());
export const updateTaskSuccess = createAction(TasksActionTypes.UPDATE_TASK_SUCCESS, props<{task: TaskModel}>());
export const updateTaskFailure = createAction(TasksActionTypes.UPDATE_TASK_FAILURE, props<{requestStatus: string}>());

export const deleteTask = createAction(TasksActionTypes.DELETE_TASK, props<{taskId: string}>());
export const deleteTaskSuccess = createAction(TasksActionTypes.DELETE_TASK_SUCCESS, props<{task: TaskModel}>());
export const deleteTaskFailure = createAction(TasksActionTypes.DELETE_TASK_FAILURE, props<{requestStatus: string}>());
