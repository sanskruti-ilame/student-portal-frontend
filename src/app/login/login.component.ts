import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';
  showPassword = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}


  login() {

    const loginData = {
      email: this.email,
      password: this.password
    };


    this.http.post<any>(
      'http://localhost:9090/api/students/login',
      loginData
    )
    .subscribe({

      next: (student) => {

        sessionStorage.setItem(
          'student',
          JSON.stringify(student)
        );

        alert('Login Successful');

        this.router.navigate(['/dashboard']);

      },


      error: () => {

        alert('Invalid Email or Password');

      }

    });

  }

}