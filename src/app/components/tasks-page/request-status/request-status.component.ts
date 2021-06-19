import { Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/states/app.state";
import {Observable} from "rxjs";
import {selectRequestStatus} from "../../../store/selectors/tasks.selectors";

@Component({
  selector: 'app-request-status',
  templateUrl: './request-status.component.html',
  styleUrls: ['./request-status.component.scss']
})
export class RequestStatusComponent{
  requestStatus$: Observable<string | undefined> = this.store.select(selectRequestStatus);

  constructor(private store: Store<AppState>) { }
}
