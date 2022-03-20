import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './fragments/todo-list/todo-list.component';
import { TodosComponent } from './todos.component';
import { TodoFormComponent } from './fragments/todo-form/todo-form.component';

@NgModule({
  declarations: [TodosComponent, TodoListComponent, TodoFormComponent],
  imports: [CommonModule],
  exports: [TodosComponent],
})
export class TodosModule {}
