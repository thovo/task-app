import {AppState} from "../states/app.state";
import {TasksState} from "../states/tasks.state";
import {selectRequestStatus, selectTasks} from "./tasks.selectors";
import {TaskModel} from "../../models/task.interface";

describe('TasksSelectors', () => {
  const initialState: AppState = {
    tasks: {
      tasks: [
        {id: '1', name: '1'},
        {id: '2', name: '2'}
      ],
      requestStatus: 'This is a request status'
    }
  };

  test('should return tasks', () => {
    let tasks: TaskModel[] | undefined = [];
    tasks = selectTasks.projector(initialState.tasks);
    expect(tasks?.length).toEqual(2);
  });

  test('should return requestStatus', () => {
    let requestStatus: string | undefined = '';
    requestStatus = selectRequestStatus.projector(initialState.tasks);
    expect(requestStatus).toEqual('This is a request status');
  });
});
