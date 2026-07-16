import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDarkMode: boolean = false;

  constructor() {

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.body.classList.add('dark-theme');
    }

  }


  toggleTheme() {

    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {

      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');

    } else {

      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');

    }

  }

}