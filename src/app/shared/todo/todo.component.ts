import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from './models/todo.model';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  @Input() todo!: Todo;

  @Output() editTodo = new EventEmitter<Todo>();
  @Output() deleteTodo = new EventEmitter<number>();

  isExpanded: boolean = false;

  constructor(private todoService: TodoService) {}

  onEditTodo($event: Event, todo: Todo) {
    $event.stopPropagation();
    this.editTodo.emit(todo);
  }

  onToggleDone(todo: Todo) {
    this.todoService
      .updateTodo(todo.id, { ...todo, done: !todo.done })
      .subscribe({
        next: (todo) => {},
        error: (err) => {
          console.error(err);
        },
      });
  }

  onDeleteTodo($event: Event, todoId: number) {
    $event.stopPropagation();
    this.deleteTodo.emit(todoId);
  }

  expandTodo() {
    console.log('expand');

    this.isExpanded = !this.isExpanded;
  }
}
