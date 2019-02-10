import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }


  login() {
    console.log(this.model);
    this.userService.loginUser(this.model)
      .subscribe(data => {
        console.log(data);
        // localStorage.setItem('isLoggedin', 'true');
        // this.router.navigate(['/dashboard']);
      }, error => console.log(error));

  }

}
