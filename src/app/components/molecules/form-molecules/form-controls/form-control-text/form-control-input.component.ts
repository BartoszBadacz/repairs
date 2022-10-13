import {Component, Input, OnInit} from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
} from "@angular/forms";
import {InputControlStateType} from "../../../../../models/form/input-control-state.type";


@Component({
  selector: 'app-form-control-input',
  templateUrl: './form-control-input.component.html',
  styleUrls: ['./form-control-input.component.scss'],
})
export class FormControlInputComponent implements OnInit, ControlValueAccessor {


  constructor() {
  }

  ngOnInit(): void {
  }


  writeValue(obj: any) {
  }

  registerOnChange(fn: any) {
  }

  registerOnTouched(fn: any) {
  }

  @Input() state!: InputControlStateType;
  @Input() fGroup!: FormGroup;

}
