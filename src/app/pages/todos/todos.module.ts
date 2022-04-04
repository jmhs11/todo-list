import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './fragments/todo-list/todo-list.component';
import { TodosComponent } from './todos.component';
import { TodoFormComponent } from './fragments/todo-form/todo-form.component';
import { TodoEditFormComponent } from './fragments/todo-edit-form/todo-edit-form.component';
import { TodoModule } from 'src/app/shared/todo/todo.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoService } from 'src/app/shared/todo/services/todo.service';

@NgModule({
  declarations: [
    TodosComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoEditFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, TodoModule],
  exports: [TodosComponent],
  providers: [TodoService],
})
export class TodosModule {}
