import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from './models/todo.model';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  @Input() todo!: Todo;

  @Output() editTodo = new EventEmitter<Todo>();
  @Output() deleteTodo = new EventEmitter<string>();

  isExpanded: boolean = false;

  constructor(private todoService: TodoService) {}

  onEditTodo($event: Event, todo: Todo) {
    $event.stopPropagation();
    this.editTodo.emit(todo);
  }

  onToggleDone(todo: Todo) {
    this.todoService.updateTodo(todo.$key!, { done: !todo.done });
  }

  onDeleteTodo($event: Event, todoId: string) {
    $event.stopPropagation();
    this.deleteTodo.emit(todoId);
  }

  expandTodo() {
    this.isExpanded = !this.isExpanded;
  }
}
