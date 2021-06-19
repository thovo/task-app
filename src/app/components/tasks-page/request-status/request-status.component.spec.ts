import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestStatusComponent } from './request-status.component';
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {AppState} from "../../../store/states/app.state";

describe('RequestStatusComponent', () => {
  let component: RequestStatusComponent;
  let fixture: ComponentFixture<RequestStatusComponent>;
  let store: MockStore;
  const initialState = {};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestStatusComponent ],
      providers: [
        provideMockStore({initialState})
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestStatusComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should update request status', (done) => {
    // GIVEN
    const state: AppState = {
      tasks: {
        tasks: [],
        requestStatus: 'This is a request status'
      }
    };

    // WHEN
    store.setState(state);
    fixture.detectChanges();

    component.requestStatus$.subscribe(requestStatus => {
      // THEN
      expect(requestStatus).toEqual('This is a request status');
      done();
    });

  });
});
