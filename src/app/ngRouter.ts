import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { MainComponent } from './main.component';
import { FrontGuard } from './services/front-guard.service';
import { HomeComponent } from './view/public/home/home.component';
import { LoginComponent } from './view/public/login/login.component';
import { LogoutComponent } from './view/public/logout/logout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', component: HomeComponent, canActivate: [FrontGuard] },
  { path: ':id', component: MainComponent, canActivate: [FrontGuard] },
  { path: '', redirectTo: '', pathMatch: 'full' },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ngRouter {}
