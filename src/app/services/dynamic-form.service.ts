import {Injectable} from '@angular/core';
import {DynamicFormState} from "../models/form/dynamic-form.state";
import {FormControl, FormGroup, FormRecord,} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  constructor() {
  }
  getData(data: DynamicFormState) {
    return data;
  }

 formGroup(form: DynamicFormState): FormGroup {
    let group: any = {};
    form.controls?.forEach((control => {
      group[control.state.name] = new FormControl(control.state.value);
    }))
    return new FormGroup(group)
  }
  formRecord(form: DynamicFormState): FormRecord {
    let group: any = {};
    form.controls?.forEach((control => {
      group[control.state.name] = new FormRecord(control.state.value);
    }))
    return new FormRecord(group)
  }
}
