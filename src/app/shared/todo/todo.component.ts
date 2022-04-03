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

  isExpanded: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  editTodo($event: Event, todo: Todo) {
    $event.stopPropagation();
    this.onEditTodo.emit(todo);
  }

  toggleDone(todo: Todo) {
    this.onToggleDone.emit({ ...todo, done: !todo.done });
  }

  deleteTodo($event: Event, todoId: number) {
    $event.stopPropagation();
    this.onDeleteTodo.emit(todoId);
  }

  expandTodo() {
    this.isExpanded = !this.isExpanded;
  }
}
