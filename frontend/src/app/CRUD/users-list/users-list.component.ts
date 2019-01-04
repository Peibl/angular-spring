import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

 users: Observable<User[]>;
   // @Input usersResult: Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.reloadData();
    // this.usersResult = this.users;
  }

  deleteUsers() {
    this.userService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

  reloadData() {
    this.users = this.userService.getUsersList();
  }

  // resultData(){
  //   this.users = this.usersResult;
  // }

}
