import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { ProductModule } from './product/product.module';

@NgModule({
  imports: [BrowserModule, ProductModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
