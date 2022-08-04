import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProtectorGuard } from './guards/protector.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'home/admin', component: HomeComponent, canActivate: [ProtectorGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
