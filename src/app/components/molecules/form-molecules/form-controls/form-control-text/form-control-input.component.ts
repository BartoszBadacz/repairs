import { Component, Input, OnInit} from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
} from "@angular/forms";
import {
  InputControlStateType
} from "../../../../../models/form/input-control-state.type";


@Component({
  selector: 'app-form-control-input',
  templateUrl: './form-control-input.component.html',
  styleUrls: ['./form-control-input.component.scss'],
})
export class FormControlInputComponent implements OnInit, ControlValueAccessor {


  constructor() {
  }


  ngOnInit(): void {

    // this.form_group.controls[`${this.input_state.name}`].valueChanges.subscribe(value => {
    //   this.form_group.controls[`${this.input_state.name}`].errors ? this.hasInputError = true : false;
    // })
  }


  writeValue(obj: any) {
  }

  registerOnChange(fn: any) {
  }

  registerOnTouched(fn: any) {
  }

  @Input() input_state!: InputControlStateType;
  @Input() form_group!: FormGroup;
  @Input() error_message!: string;

}
