import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  Subscription,
  switchMap,
  tap,
} from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  PORT = '3000';
  API_URL = `http://localhost:${this.PORT}/todos`;

  private _subjectTodo: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>(
    []
  );
  public todos$: Observable<Todo[]> = this._subjectTodo.asObservable();

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API_URL).pipe(
      switchMap((todos) => {
        this._subjectTodo.next(todos);
        return this.todos$;
      })
    );
  }

  fetchTodos() {
    this.http.get<Todo[]>(this.API_URL).subscribe({
      next: (todos) => {
        this._subjectTodo.next(todos);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  getTodo(id: number): Observable<Todo> {
    return this.http
      .get<Todo>(`${this.API_URL}/${id}`)
      .pipe(tap(() => this.fetchTodos()));
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http
      .post<Todo>(this.API_URL, todo)
      .pipe(tap(() => this.fetchTodos()));
  }

  updateTodo(id: number, todo: any): Observable<Todo> {
    return this.http
      .put<Todo>(`${this.API_URL}/${id}`, todo)
      .pipe(tap(() => this.fetchTodos()));
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http
      .delete<Todo>(`${this.API_URL}/${id}`)
      .pipe(tap(() => this.fetchTodos()));
  }
}
