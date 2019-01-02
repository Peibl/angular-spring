import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { UsersListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss']
})
export class SearchUsersComponent implements OnInit {

  email: string;
  users: User[];

  constructor(private dataService: UserService, private listComponent: UsersListComponent) { }

  ngOnInit() {
    this.email = "";
  }

  private searchUsers() {
    this.dataService.getUsersByEmail(this.email)
    /*.subscribe(users => this.users = users);*/
  .subscribe(
  users => {
    console.log(users);
    this.listComponent.resultData();
  },
  error => console.log(error));
  }

  onSubmit() {
    this.searchUsers();
  }
}
