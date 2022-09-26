import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";
import {InputControlState} from "../../../models/form/InputControlState";

@Component({
  selector: 'app-form-control-input',
  templateUrl: './form-control-input.component.html',
  styleUrls: ['./form-control-input.component.scss']
})
export class FormControlInputComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }

  isRequired(): boolean {
    let validators = new Set(this.state.validators);
    return validators.has(Validators.required);
  }

  @Input() controlFormGroup!: FormGroup;
  @Input() state!: InputControlState;

}
