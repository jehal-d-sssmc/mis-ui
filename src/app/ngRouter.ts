import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { MainComponent } from './main.component';
import { HomeComponent } from './view/public/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'Main'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home'
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ngRouter {}
