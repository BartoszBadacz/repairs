import {Component, Input, OnInit} from '@angular/core';
import {FormControlTextState} from "../../../models/form/dynamic-form.state";

@Component({
  selector: 'app-form-control-text',
  templateUrl: './form-control-text.component.html',
  styleUrls: ['./form-control-text.component.scss']
})
export class FormControlTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() controlState: FormControlTextState = {}

}
