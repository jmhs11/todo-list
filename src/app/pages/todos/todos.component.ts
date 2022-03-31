import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo/models/todo.model';
import { TodoService } from 'src/app/shared/todo/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  editTodo!: Todo | null;
  editMode: boolean = false;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  onEditTodo(todo: Todo) {
    this.editMode = true;
    this.editTodo = todo;
  }

  onDeleteTodo() {
    if (this.editMode) {
      this.todoService.getTodo(this.editTodo!.id).subscribe({
        error: () => {
          this.editMode = false;
        },
      });
    }
  }

  onSubmit() {
    this.editMode = false;
    this.editTodo = null;
  }
}
