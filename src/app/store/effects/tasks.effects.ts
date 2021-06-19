import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TasksService} from "../../services/tasks.service";
import {
  createTask, createTaskFailure,
  createTaskSuccess, deleteTask, deleteTaskFailure, deleteTaskSuccess, getTask, getTaskFailure,
  getTasks,
  getTasksFailure,
  getTasksSuccess, getTaskSuccess,
  updateTask, updateTaskFailure, updateTaskSuccess
} from "../actions/tasks.actions";
import {catchError, exhaustMap, map, tap} from "rxjs/operators";
import {of} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class TasksEffects {
  constructor(
    private actions$: Actions,
    private tasksService: TasksService
  ) {}

  getTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTasks),
      exhaustMap(action => this.tasksService.getTasks().pipe(
        map(tasks => getTasksSuccess({tasks})),
        catchError((response: HttpErrorResponse) => of(getTasksFailure({requestStatus: response.error})))
      ))
    )
  );

  getTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTask),
      exhaustMap(action => this.tasksService.getTask(action.taskId).pipe(
        map(response => getTaskSuccess(response)),
        catchError((response: HttpErrorResponse) => of(getTaskFailure({requestStatus: response.error})))
      ))
    )
  );

  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTask),
      exhaustMap(action =>
        this.tasksService.createTask(action.taskName).pipe(
          map(task => createTaskSuccess({task})),
          catchError((response: HttpErrorResponse) => of(createTaskFailure({requestStatus: response.error}))))
      )
    )
  );


  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTask),
      exhaustMap(action => this.tasksService.deleteTask(action.taskId).pipe(
        map(task => deleteTaskSuccess({task})),
        catchError((response: HttpErrorResponse) => of(deleteTaskFailure({requestStatus: response.error}))))
      )
    )
  );

  updateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTask),
      exhaustMap(action =>
        this.tasksService.updateTask(action.taskId, action.taskName).pipe(
          map(task => updateTaskSuccess({task})),
          catchError((response: HttpErrorResponse) => of(updateTaskFailure({requestStatus: response.error}))))
      )
    )
  );

}
