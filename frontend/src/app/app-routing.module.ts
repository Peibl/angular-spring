import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './CRUD/users-list/users-list.component';
import { CreateUserComponent } from './CRUD/create-user/create-user.component';
import { SearchUsersComponent } from './CRUD/search-users/search-users.component';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: UsersListComponent },
  { path: 'add', component: CreateUserComponent },
  { path: 'findbyemail', component: SearchUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
