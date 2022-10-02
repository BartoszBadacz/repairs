import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators
} from "@angular/forms";
import {InputControlState} from "../../../../models/form/InputControlState";


@Component({
  selector: 'app-form-control-input',
  templateUrl: './form-control-input.component.html',
  styleUrls: ['./form-control-input.component.scss'],
  providers: []
})
export class FormControlInputComponent implements OnInit, ControlValueAccessor {


  constructor() {
  }

  ngOnInit(): void {
  }

  isRequired(): boolean {
    let validators = new Set(this.state.validators);
    return validators.has(Validators.required);
  }

  writeValue(obj: any) {
  }

  registerOnChange(fn: any) {
  }

  registerOnTouched(fn: any) {
  }

  @Input() control!: FormControl;
  @Input() state!: InputControlState;
  @Input() fGroup!: FormGroup;

}
