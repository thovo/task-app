import {ActionReducerMap} from "@ngrx/store";
import {AppState} from "../states/app.state";
import * as fromTasks from "./tasks.reducers";

export const AppReducer: ActionReducerMap<AppState> = {
  tasks: fromTasks.reducer
}
