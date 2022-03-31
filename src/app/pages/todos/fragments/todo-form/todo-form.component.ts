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
export class TodoFormComponent implements OnInit {
  todoForm: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  @Output() onSubmitForm = new EventEmitter<Todo>();

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private el: ElementRef
  ) {}

  ngOnInit(): void {}

  onSubmit(form: FormGroup) {
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
