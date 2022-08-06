import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProtectorGuard } from './guards/protector.guard';
import { DataResolver } from './data.resolver';

const routes: Routes = [
  {path: 'home', component: HomeComponent, resolve: {user: DataResolver}},
  {path: 'home/admin', component: HomeComponent, canActivate: [ProtectorGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full', resolve: {user: DataResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
