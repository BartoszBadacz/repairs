import {Component, OnInit} from '@angular/core';
import {Icon} from "../../../models/icon.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }


  ngOnInit(): void {
  }

  onHomeClick(): void {
    console.log('Home Clicked')
  }

  onRefreshClick(): void {
    console.log('Refresh Clicked')
  }
  onRepairsClick() {
    console.log('REPAIRS clicked')
  }

  onSettingsClick() {
    console.log('SETTINGS clicked')
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
