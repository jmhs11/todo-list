import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule, AngularSvgIconModule],
  exports: [TodoComponent],
})
export class TodoModule {}
