import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, AngularSvgIconModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
