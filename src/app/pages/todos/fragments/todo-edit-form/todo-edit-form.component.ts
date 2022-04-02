import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/shared/todo/models/todo.model';
import { TodoService } from 'src/app/shared/todo/services/todo.service';

@Component({
  selector: 'app-todo-edit-form',
  templateUrl: './todo-edit-form.component.html',
  styles: [],
})
export class TodoEditFormComponent implements OnInit {
  editTodoForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(250)]],
  });

  @Input() selectedTodo!: Todo;
  @Output() onSubmitEvent = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private todoService: TodoService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedTodo'] && !!changes['selectedTodo'].currentValue) {
      this.editTodoForm.patchValue(changes['selectedTodo'].currentValue);
    }
  }

  onSubmit() {
    this.todoService
      .updateTodo(this.selectedTodo.id, {
        ...this.selectedTodo,
        ...this.editTodoForm.value,
      })
      .subscribe({
        next: (todo) => {
          this.selectedTodo = todo;
          this.onSubmitEvent.emit();
        },
        error: (err) => {
          console.error(err);
        },
      });
  }
}
