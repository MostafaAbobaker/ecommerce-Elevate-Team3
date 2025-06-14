import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  darkMode!:boolean

  constructor(private _themeService:ThemeService){}
  ngOnInit(): void {
    if(this.getCurrentTheme() == 'light' ) {
      this.darkMode = false;
    } else {
      this.darkMode = true;
    }
  }
  getCurrentTheme(): string {
    return this._themeService.getTheme();
  }
  setTheme(name:string) {
    this._themeService.setTheme(name);
    this.darkMode = !this.darkMode;
  }
}
