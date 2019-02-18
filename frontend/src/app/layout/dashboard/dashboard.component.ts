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

  constructor(private postService: PostService, private userService: UserService) {
  }

  ngOnInit() {
  }

  publishPost() {
    console.log(this.publish);
    const post = new Post();
    post.creation_date = new Date();
    post.text = this.publish;
    const jsonUser = localStorage.getItem('loggedUser');
    post.user_creator = JSON.parse(jsonUser)as User;
    console.log(post);

    this.postService.createPost(post).subscribe(response => {
      console.log(response);
      this.publish = '';

    });
  }
}
