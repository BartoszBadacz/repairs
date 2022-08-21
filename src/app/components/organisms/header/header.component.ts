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

  constructor(private colorScheme: ColorSchemeService) {
  }

  scheme: ColorScheme = this.colorScheme.getScheme();

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

  toggleScheme() {
    if (this.scheme === 'light') {
      this.scheme = 'dark'
    } else {
      this.scheme = 'light';
    }
  }

  onColorSchemeClick() {
    this.toggleScheme();
    this.colorScheme.setScheme(this.scheme);
  }

  icon(iconName: Icon): Icon {
    return iconName
  }

  onInput(searchValue: string) {
    console.log(searchValue)
  }

  onBackClick(): void {
    console.log('BACK clicked')
  }

  onForwardClick(): void {
    console.log('FORWARD clicked')
  }

}
