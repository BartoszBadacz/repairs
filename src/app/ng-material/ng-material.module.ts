import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicModalComponent} from '../components/molecules/basic-modal/basic-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
// import {
//   BasicModalComponent
// } from "./components/molecules/basic-modal/basic-modal.component";

@NgModule({
  declarations: [
    BasicModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [MatDialogModule, MatButtonModule]
})
export class NgMaterialModule {
}
