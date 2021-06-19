import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {deleteTask, updateTask} from "../../../store/actions/tasks.actions";

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let store: MockStore;
  const initialState = {};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskComponent ],
      providers: [
        provideMockStore({initialState})
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('deleteTask', () => {
    // GIVEN
    const taskId: string = '1';
    const dispatchSpy = jest.spyOn(store, 'dispatch');

    // WHEN
    component.deleteTask(taskId);

    // THEN
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(deleteTask({taskId}));
  });

  test('editTask', () => {
    // GIVEN
    component.task.name = 'Test';

    // WHEN
    component.editTask();

    // THEN
    expect(component.isEditActive).toBeTruthy();
    expect(component.taskName).toEqual('Test');
  });

  test('saveTask', () => {
    // GIVEN
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    component.task = {
      id: '1',
      name: '1'
    };
    component.taskName = 'Test';

    // WHEN
    component.saveTask();

    // THEN
    expect(component.isEditActive).toBeFalsy();
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(updateTask({taskId: '1', taskName: 'Test'}));
  });

  test('cancel', () => {
    // WHEN
    component.cancel();

    // THEN
    expect(component.isEditActive).toBeFalsy();
  });
});
