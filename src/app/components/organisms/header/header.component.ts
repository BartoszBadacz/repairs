import {Component, OnInit} from '@angular/core';
import {Icon} from "../../../models/icon.model";
import {
  ColorScheme,
  ColorSchemeService
} from "../../../services/color-scheme.service";
import {MatDialog} from "@angular/material/dialog";
import {
  BasicModalComponent
} from "../../molecules/basic-modal/basic-modal.component";
import {DialogService} from "../../../services/dialog.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private colorSchemeService: ColorSchemeService, private popup: DialogService) {
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

  exemplaryModalPopup(): void {
    console.log('FORWARD clicked')
    this.openDialog();
  }

  openDialog() {
    this.popup.open(BasicModalComponent);
  }

}
