import {Component, Input, OnInit} from '@angular/core';
import {
  FormControlTextState
} from "../../../models/form/dynamic-form.state";
import {FormControl, FormGroup} from "@angular/forms";

class Control {
}

@Component({
  selector: 'app-form-control-text',
  templateUrl: './form-control-text.component.html',
  styleUrls: ['./form-control-text.component.scss']
})
export class FormControlTextComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() data!: FormControlTextState;
  @Input() form!: FormGroup;
}
