import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {

    const student = sessionStorage.getItem('student');

    if (student) {
      return true;
    }

    alert('Please login first!');

    this.router.navigate(['/login']);

    return false;
  }

}