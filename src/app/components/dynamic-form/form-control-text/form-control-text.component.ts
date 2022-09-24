import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";
import {TextControlModel} from "../../../models/form/TextControl.model";

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

  isRequired(): boolean {
    let validat = new Set(this.state.validators)
    return validat?.has(Validators.required);
  }

  @Input() controlFormGroup!: FormGroup;
  @Input() state!: TextControlModel;

}
