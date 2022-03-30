import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/shared/todo/models/todo.model';
import { TodoService } from 'src/app/shared/todo/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {
  @Output() editTodo = new EventEmitter<Todo>();
  @Output() deleteTodo = new EventEmitter<void>();

  constructor(readonly todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe({
      next: (todos) => {},
      error: (err) => {
        console.error(err);
      },
    });
  }

  onEditTodo(todo: Todo) {
    this.editTodo.emit(todo);
  }

  onToggleDone(todo: Todo) {
    this.todoService.updateTodo(todo.id, todo).subscribe({
      next: (todo) => {},
      error: (err) => {
        console.error(err);
      },
    });
  }

  onDeleteTodo(todoId: number) {
    this.todoService.deleteTodo(todoId).subscribe({
      next: () => {
        console.log('todo deleted');
        this.deleteTodo.emit();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
