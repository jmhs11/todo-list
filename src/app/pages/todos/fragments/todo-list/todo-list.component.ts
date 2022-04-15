import { Component, EventEmitter, Output } from '@angular/core';
import { map } from 'rxjs';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Todo } from 'src/app/shared/todo/models/todo.model';
import { TodoService } from 'src/app/shared/todo/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  todos: Todo[] = [];

  @Output() editTodo = new EventEmitter<Todo>();
  @Output() deleteTodo = new EventEmitter<void>();

  constructor(readonly todoService: TodoService, private auth: AuthService) {
    this.auth.user.subscribe((user) => {
      this.todoService
        .getAllTodosByUser(user!.uid)
        .pipe(
          map((changes) =>
            changes.map((c) => ({ $key: c.payload.key, ...c.payload.val() }))
          )
        )
        .subscribe((todos) => {
          this.todos = todos as Todo[];
        });
    });
  }

  onEditTodo(todo: Todo) {
    this.editTodo.emit(todo);
  }

  onDeleteTodo(todoId: string) {
    this.todoService.deleteTodo(todoId);
  }
}
