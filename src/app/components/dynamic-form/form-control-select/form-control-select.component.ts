import {Component, Input, OnInit} from '@angular/core';
import {
  FormControlSelectState,
  FormControlTextState
} from "../../../models/form/dynamic-form.state";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-control-select',
  templateUrl: './form-control-select.component.html',
  styleUrls: ['./form-control-select.component.scss']
})
export class FormControlSelectComponent implements OnInit {
  @Input() meta!: FormControlSelectState;
  @Input() form!: FormGroup;
  constructor() {
  }

  ngOnInit(): void {
  }
}
