import {Injectable} from '@angular/core';

export type ColorScheme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ColorSchemeService {

  constructor() {
  }

  currentScheme: ColorScheme = 'light'

  getScheme(): ColorScheme {
    return this.currentScheme;
  }

  setScheme(colorScheme: ColorScheme): void {
    this.currentScheme = colorScheme;
    this.changeScheme();
  }

  private changeScheme() {
    document.body.setAttribute('color-scheme', this.currentScheme)
  }
}
