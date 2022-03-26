import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, TodoModule, AngularSvgIconModule],
  exports: [HeaderComponent, TodoModule],
})
export class SharedModule {}
