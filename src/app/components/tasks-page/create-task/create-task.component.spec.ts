import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateTaskComponent } from './create-task.component';
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {createTask} from "../../../store/actions/tasks.actions";
import {FormsModule} from "@angular/forms";

describe('CreateTaskComponent', () => {
  let component: CreateTaskComponent;
  let fixture: ComponentFixture<CreateTaskComponent>;
  let store: MockStore;
  const initialState = {};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTaskComponent ],
      providers: [
        FormsModule,
        provideMockStore({initialState})
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaskComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });


  test('createTask', () => {
    // GIVEN
    const dispatchSpy = jest.spyOn(store, "dispatch");
    component.taskName = 'test';
    // WHEN
    component.createTask();

    // THEN
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(createTask({taskName: 'test'}));
  });
});
