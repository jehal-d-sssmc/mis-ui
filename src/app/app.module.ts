import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { ngRouter } from './ngRouter';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, ngRouter],
  declarations: [AppComponent, MainComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
