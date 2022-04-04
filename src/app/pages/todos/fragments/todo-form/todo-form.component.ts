import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/shared/todo/models/todo.model';
import { TodoService } from 'src/app/shared/todo/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
})
export class TodoFormComponent {
  todoForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(250)]],
  });

  get title() {
    return this.todoForm.controls['title'];
  }

  get description() {
    return this.todoForm.controls['description'];
  }

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private el: ElementRef
  ) {}

  addTodo(form: FormGroup) {
    const { title, description } = form.value;
    const todo: Todo = {
      id: Date.now(),
      title,
      description,
      done: false,
    };

    this.todoService.addTodo(todo).subscribe({
      next: (todo) => {
        this.todoForm.reset();
        this.todoForm.controls['title'].markAsUntouched();
        this.todoForm.controls['description'].markAsUntouched();
        this.el.nativeElement
          .querySelector('[formcontrolname="title"]')
          .focus();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
