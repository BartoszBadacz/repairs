import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
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

  close() {
    return this.dialog.closeAll();
  }

}
