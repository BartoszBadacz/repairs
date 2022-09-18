import {Component, Input, OnInit} from '@angular/core';
import {FormControlSelectState} from "../../../models/form/dynamic-form.state";

@Component({
  selector: 'app-form-control-select',
  templateUrl: './form-control-select.component.html',
  styleUrls: ['./form-control-select.component.scss']
})
export class FormControlSelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() controlState: FormControlSelectState = {}
}
