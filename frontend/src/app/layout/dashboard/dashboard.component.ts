import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import {PostService} from '../../services/post.service';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  publish;
  user: User;

  constructor(private postService: PostService, private userService: UserService) {
  }

  ngOnInit() {
    if (this.userService.loggedUser) {
      this.user = this.userService.loggedUser;
    } else {
      const jsonUser = localStorage.getItem('loggedUser');
      this.user = JSON.parse(jsonUser)as User;
    }
  }

  publishPost() {
    const post = new Post();
    post.creation_date = new Date();
    post.text = this.publish;
    const jsonUser = localStorage.getItem('loggedUser');
    post.user_creator = JSON.parse(jsonUser)as User;


    this.postService.createPost(post).subscribe(response => {
      this.publish = '';
      this.userService.getUser(this.user.id).subscribe(response2 => {
        this.user = response2 as User;
        localStorage.setItem('loggedUser', JSON.stringify(this.user));
      });

    });
  }
}
