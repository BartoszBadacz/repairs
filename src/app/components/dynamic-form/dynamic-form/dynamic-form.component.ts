import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
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


  @Input() form!: FormGroup;
  @Input() data!: DynamicFormState;

}
