import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo/models/todo.model';
import { TodoService } from 'src/app/shared/todo/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent {
  todos: Todo[] = [];
  editTodo!: Todo | null;
  editMode: boolean = false;

  constructor(private todoService: TodoService) {}

  onEditTodo(todo: Todo) {
    this.editMode = true;
    this.editTodo = todo;
  }

  deleteTodo() {
    if (this.editMode) {
      this.todoService.getTodo(this.editTodo!.$key!).subscribe({
        error: () => {
          this.editMode = false;
        },
      });
    }
  }

  addTodo() {
    this.editMode = false;
    this.editTodo = null;
  }
}
