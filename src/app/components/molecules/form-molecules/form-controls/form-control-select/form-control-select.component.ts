import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {
  SelectControlState
} from "../../../../../models/form/select-control-state.type";
@Component({
  selector: 'app-form-control-select',
  templateUrl: './form-control-select.component.html',
  styleUrls: ['./form-control-select.component.scss']
})
export class FormControlSelectComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() control_state!: SelectControlState;
  @Input() form_group!: FormGroup;
  @Input() error_message!: string;
}
