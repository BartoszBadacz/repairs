import {Component, Input, OnInit} from '@angular/core';
import {DynamicFormState} from "../../../models/form/dynamic-form.state";

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() formState: DynamicFormState = {}

}
