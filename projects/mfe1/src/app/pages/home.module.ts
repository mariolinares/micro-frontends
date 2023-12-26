import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HOME_ROUTES } from './home.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(HOME_ROUTES)],
  declarations: [HomeComponent],
  providers: [],
  exports: [],
})
export class HomeModule {}
