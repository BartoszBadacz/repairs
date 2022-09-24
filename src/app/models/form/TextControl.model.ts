import {Validators} from "@angular/forms";

export interface TextControlModel {
  errorMessage: string,
  autocomplete: 'off' | '',
  formControlName: string,
  required: boolean;
  disabled: boolean;
  label: string;
  validators?: Validators[] | [],
}
