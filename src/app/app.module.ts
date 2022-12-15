import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { ngRouter } from './ngRouter';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, ngRouter],
  declarations: [AppComponent, MainComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
