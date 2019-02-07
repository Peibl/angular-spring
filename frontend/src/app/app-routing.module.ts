import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersListComponent} from './CRUD/users-list/users-list.component';
import {CreateUserComponent} from './CRUD/create-user/create-user.component';
import {SearchUsersComponent} from './CRUD/search-users/search-users.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthGuardGuard} from './_guards/auth-guard.guard';

const routes: Routes = [
  {path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuardGuard]},
  {path: 'user', component: UsersListComponent},
  {path: 'add', component: CreateUserComponent},
  {path: 'findbyemail', component: SearchUsersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
