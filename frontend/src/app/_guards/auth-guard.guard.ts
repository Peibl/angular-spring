import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate() {
    console.log('canActi');
    if (localStorage.getItem('isLoggedin')) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
