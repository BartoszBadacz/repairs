import {Component, Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {NgClass} from "@angular/common";
import {
  BasicModalComponent
} from "../components/molecules/basic-modal/basic-modal.component";
import {ComponentType} from "@angular/cdk/overlay";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {
  }

  open<T>(component: ComponentType<T>) {
    return this.dialog.open(component);
  }

}
