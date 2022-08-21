import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Icon} from "../../../models/icon.model";
import {
  ColorScheme,
  ColorSchemeService
} from "../../../services/color-scheme.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private colorSchemeService: ColorSchemeService) {
  }

  currentColorScheme: ColorScheme = this.colorSchemeService.getScheme();

  ngOnInit(): void {
  }

  onHomeClick(): void {

  }

  onRefreshClick(): void {
    console.log('Refresh Clicked')
  }

  onRepairsClick() {
    console.log('REPAIRS clicked')
  }

  setScheme() {
    if (this.currentColorScheme === 'light') {
      this.currentColorScheme = 'dark'
    } else {
      this.currentColorScheme = 'light';
    }
  }

  onColorSchemeClick() {
    this.setScheme();
    this.colorSchemeService.setScheme(this.currentColorScheme);
  }

  icon(iconName: Icon): Icon {
    return iconName
  }

  onBackClick(): void {
    console.log('BACK clicked')
  }

  onForwardClick(): void {
    console.log('FORWARD clicked')
  }

}
