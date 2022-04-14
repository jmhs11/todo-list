import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { AuthService } from '../../auth/auth.service';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private dbPath = '/todos';
  todosRef: AngularFireList<Todo>;
  todoRef?: AngularFireObject<Todo>;

  userId: string = '';

  constructor(private db: AngularFireDatabase, private auth: AuthService) {
    this.todosRef = this.db.list(`${this.dbPath}`);
    this.auth.user.subscribe((user) => {
      this.userId = user!.uid;
    });
  }

  getAllTodos(): AngularFireList<Todo> {
    return this.todosRef;
  }

  getAllTodosByUser(id: string) {
    this.todosRef = this.db.list(`${this.dbPath}/${id}`);
    return this.todosRef.snapshotChanges();
  }

  getTodo(todoId: string) {
    this.todoRef = this.db.object(`${this.dbPath}/${this.userId}/${todoId}`);
    return this.todoRef.snapshotChanges();
  }

  addTodo(todo: Todo) {
    return this.todosRef.push(todo);
  }

  updateTodo(key: string, value: any): Promise<void> {
    return this.todosRef.update(key, value);
  }

  deleteTodo(id: string) {
    return this.todosRef.remove(id);
  }
}
