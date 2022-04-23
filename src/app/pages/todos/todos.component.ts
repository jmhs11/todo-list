import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo/models/todo.model';
import { TodoService } from 'src/app/shared/todo/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent {
  todos: Todo[] = [];
  editedTodo!: Todo | null;
  editMode: boolean = false;

  onEditTodoAction(todo: Todo) {
    this.editMode = true;
    this.editedTodo = todo;
  }

  deleteTodo(todoId: string) {
    if (this.editMode && this.editedTodo?.$key === todoId) {
      this.editMode = false;
      this.editedTodo = null;
    }
  }

  editTodo() {
    this.editMode = false;
    this.editedTodo = null;
  }
}
