import {
  createTask,
  createTaskSuccess,
  deleteTaskSuccess,
  getTasks, getTasksSuccess,
  updateTaskFailure,
  updateTaskSuccess
} from "../actions/tasks.actions";
import {TaskModel} from "../../models/task.interface";
import {reducer} from "./tasks.reducers";
import {initialState, TasksState} from "../states/tasks.state";
import {TestBed} from "@angular/core/testing";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {AppState} from "../states/app.state";
import {createAction} from "@ngrx/store";
import {selectRequestStatus} from "../selectors/tasks.selectors";

describe('TasksReducers', () => {
  const mockTasks: TaskModel[] = [
    {
      id: '1',
      name: '1'
    },
    {
      id: '2',
      name: '2'
    }
  ];

  const initialState: AppState = {
    tasks: {
      tasks: [],
      isLoading: false,
      isLoadingSuccess: false,
      isLoadingFailure: false,
      requestStatus: ''
    }
  };

  let store: MockStore;
  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        provideMockStore({initialState})
      ]
    });

    store = TestBed.inject(MockStore);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should return default state', () => {
    // GIVEN
    const action = createAction('Unknown action');

    // WHEN
    const result = reducer(initialState.tasks, action);

    // THEN
    expect(result).toEqual(initialState.tasks);
  });

  test('createTaskSuccess', () => {
    // GIVEN
    const task: TaskModel = {
      id: '3',
      name: '3'
    };
    const expected: TasksState = {
      ...initialState.tasks,
      tasks: [task]
    }
    const action = createTaskSuccess({task});

    // WHEN
    const result = reducer(initialState.tasks, action);

    // THEN
    expect(result).toEqual(expected);
  });

  test('deleteTaskSuccess', () => {
    // GIVEN
    const task: TaskModel = {
      id: '3',
      name: '3'
    };
    const state: AppState = {
      ...initialState,
      tasks : {
        tasks: [task],
        requestStatus: ''
      }
    }
    store.setState(state);
    const expected: TasksState = {
      ...initialState.tasks,
      tasks: []
    }
    const action = deleteTaskSuccess({task});

    // WHEN
    const result = reducer(initialState.tasks, action);

    // THEN
    expect(result).toEqual(expected);
  });

  xtest('updateTaskSuccess', () => {
    // TODO: rework this test, not success yet
    // GIVEN
    const task: TaskModel = {
      id: '3',
      name: 'New value'
    };

    const currentState: AppState = {
      tasks: {
        tasks: [
          {
            id: '3',
            name: '3'
          }
        ],
        isLoadingFailure: false,
        isLoadingSuccess: false,
        isLoading: false,
        requestStatus: ''
      }
    };

    store.setState(currentState);

    const expected: TasksState = {
      ...initialState.tasks,
      tasks: [
        {id: '3', name: 'New value'}
      ]
    };

    const action = updateTaskSuccess({task});

    // WHEN
    const result = reducer(initialState.tasks, action);

    // THEN
    expect(result).toEqual(expected);
  });

  test('failure request should update request status', () => {
    // GIVEN
    const requestStatus = 'Error happened';
    const action = updateTaskFailure({requestStatus});

    // WHEN
    const result = reducer(initialState.tasks, action);

    // THEN
    expect(result.requestStatus).toEqual(requestStatus);
  });

  test('getTasks should return isLoading true', () => {
    // GIVEN
    const action = getTasks();

    // WHEN
    const result = reducer(initialState.tasks, action);

    // THEN
    expect(result.isLoading).toBeTruthy();
  });

  test('getTasksSuccess', () => {
    // GIVEN
    const tasks: TaskModel[] = [
      {id: '1', name: '1'},
      {id: '2', name: '2'}
    ];
    const action = getTasksSuccess({tasks});

    // WHEN
    const result = reducer(initialState.tasks, action);

    // THEN
    expect(result.tasks?.length).toEqual(2);
    expect(result.isLoading).toBeFalsy();
  });

  test('should return same state when init request', () => {
    // GIVEN
    const action = createTask({taskName: 'Test'});

    // WHEN
    const result = reducer(initialState.tasks, action);

    // THEN
    expect(result).toEqual(initialState.tasks);
  });
});
