import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly THEME_KEY = 'app-theme';
  private currentTheme: string = 'light';



constructor() {
  if (typeof window !== 'undefined' && window.localStorage) {
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme) {
      this.setTheme(savedTheme);
      return;
    }
  }
  this.setTheme(this.currentTheme);
}

 setTheme(theme: string): void {
  this.currentTheme = theme;
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem(this.THEME_KEY, theme);
  }
}

  toggleTheme(): void {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  getTheme(): string {
    return this.currentTheme;
  }

}
