import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;

  @Output() onEditTodo = new EventEmitter<Todo>();
  @Output() onToggleDone = new EventEmitter<Todo>();
  @Output() onDeleteTodo = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  editTodo(todo: Todo) {
    this.onEditTodo.emit(todo);
  }

  toggleDone(todo: Todo) {
    this.onToggleDone.emit({ ...todo, done: !todo.done });
  }

  deleteTodo(todoId: number) {
    this.onDeleteTodo.emit(todoId);
  }
}
