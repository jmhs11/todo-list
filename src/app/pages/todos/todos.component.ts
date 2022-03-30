import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo/models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  editTodo!: Todo | null;

  constructor() {}

  ngOnInit(): void {}

  onEditTodo(todo: Todo) {
    this.editTodo = todo;
  }

  onDeleteTodo() {
    this.editTodo = null;
  }
}
