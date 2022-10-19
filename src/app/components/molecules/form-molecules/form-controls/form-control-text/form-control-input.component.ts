import {Component, Input, OnInit} from '@angular/core';
import {
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
export class FormControlInputComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() input_state!: InputControlStateType;
  @Input() form_group!: FormGroup;
  @Input() error_message!: string;

}
