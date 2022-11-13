import {Component, Input, OnInit} from '@angular/core';
import {
  FormGroup,
} from "@angular/forms";
import {
  InputControlState
} from "../../../../../models/form/input-control-state.type";


@Component({
  selector: 'app-form-control-input',
  templateUrl: './form-control-input.component.html',
  styleUrls: ['./form-control-input.component.scss'],
})
export class FormControlInputComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() control_state!: InputControlState;
  @Input() form_group!: FormGroup;
  @Input() error_message!: string;

}
