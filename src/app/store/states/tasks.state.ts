import {TaskModel} from "../../models/task.interface";

export interface TasksState {
  tasks?: TaskModel[],
  isLoading?: boolean;
  isLoadingSuccess?: boolean;
  isLoadingFailure?: boolean;
  requestStatus?: string;
}

export const initialState: TasksState = {
  tasks: [],
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false,
  requestStatus: ''
}
