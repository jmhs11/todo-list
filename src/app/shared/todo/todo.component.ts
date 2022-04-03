import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  @Input() todo!: Todo;

  @Output() editTodo = new EventEmitter<Todo>();
  @Output() toggleDone = new EventEmitter<Todo>();
  @Output() deleteTodo = new EventEmitter<number>();

  isExpanded: boolean = false;

  constructor() {}

  onEditTodo($event: Event, todo: Todo) {
    $event.stopPropagation();
    this.editTodo.emit(todo);
  }

  onToggleDone(todo: Todo) {
    this.toggleDone.emit({ ...todo, done: !todo.done });
  }

  onDeleteTodo($event: Event, todoId: number) {
    $event.stopPropagation();
    this.deleteTodo.emit(todoId);
  }

  expandTodo() {
    this.isExpanded = !this.isExpanded;
  }
}
