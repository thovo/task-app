import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { TasksPageComponent } from './tasks-page.component';
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {of} from "rxjs";
import {TaskModel} from "../../models/task.interface";
import {selectTasks} from "../../store/selectors/tasks.selectors";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('TasksPageComponent', () => {
  let component: TasksPageComponent;
  let fixture: ComponentFixture<TasksPageComponent>;
  let store: MockStore;
  const initialState = {
    tasks: {
      tasks: []
    }
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksPageComponent ],
      providers: [
        provideMockStore({initialState})
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksPageComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('ngOnInit', () => {
    // GIVEN
    const dispatchSpy = jest.spyOn(store, "dispatch");
    const mockTasks: TaskModel[] = [
      {id: '1', name: '1'},
      {id: '2', name: '2'}
    ];
    const selectSpy = jest.spyOn(store, "select").mockReturnValueOnce(of(mockTasks));

    // WHEN
    component.ngOnInit();

    // THEN
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(selectSpy).toHaveBeenCalled();
    expect(selectSpy).toHaveBeenCalledWith(selectTasks);
  });
});
