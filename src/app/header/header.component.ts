import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  student: any;

  constructor(
    public themeService: ThemeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.student = JSON.parse(sessionStorage.getItem('student') || '{}');
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
logout() {

  console.log('Logout clicked');

  alert('Logout clicked');

  sessionStorage.clear();

  this.router.navigate(['/login']);

  }

}