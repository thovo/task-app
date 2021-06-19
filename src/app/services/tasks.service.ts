import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TaskModel} from "../models/task.interface";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  baseUrl = 'http://localhost:3000/tasks';
  constructor (private http: HttpClient) {}

  getTasks(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(`${this.baseUrl}`);
  }

  getTask(id: string): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/${id}`);
  }

  createTask(name: string): Observable<TaskModel> {
    return this.http.post<TaskModel>(`${this.baseUrl}/new`, {name});
  }

  updateTask(id: string, name: string): Observable<TaskModel> {
    return this.http.put<TaskModel>(`${this.baseUrl}/${id}`, {name});
  }

  deleteTask(id: string): Observable<TaskModel> {
    return this.http.delete<TaskModel>(`${this.baseUrl}/${id}`);
  }
}
