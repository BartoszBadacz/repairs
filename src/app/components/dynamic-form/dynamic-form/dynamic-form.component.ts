import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FormState} from "../../../models/form/form.state";

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
  @Input() data!: FormState;

}
