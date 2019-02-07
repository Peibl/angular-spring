import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateUserComponent } from './layout/create-user/create-user.component';
import { UserDetailsComponent } from './layout/user-details/user-details.component';
import { UsersListComponent } from './layout/users-list/users-list.component';
import { SearchUsersComponent } from './layout/search-users/search-users.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule/*,
    CommonModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
