import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor(private router: Router) {
  }

  ngOnInit() {
  }


  register() {
    console.log(this.model);
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/dashboard']);
    // this.loading = true;
    // this.authenticationService.login(this.model.username, this.model.password)
    //   .subscribe(
    //     data => {
    //     },
    //     error => {
    //       this.alertService.error(error);
    //       this.loading = false;
    //     });
  }
}
