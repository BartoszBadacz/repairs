import {Component, OnInit} from '@angular/core';
import {
  DynamicFormState, FormControlSelectState,
  FormControlTextState
} from "../../../models/form/dynamic-form.state";
import {DynamicFormService} from "../../../services/dynamic-form.service";
import {Validators} from "@angular/forms";

const dynamicForm: DynamicFormState = {
  title: 'Przykładowy formularz testowy',
  isNullable: false,
  controls: [
    {
      type: "text",
      state: <FormControlTextState>{
        type: "text",
        label: 'Label do Text',
        name: 'firstName',
        value: 'Bartosz',
        validations: [Validators.required]
      }
    },
    // {
    //   type: "select",
    //   state: <FormControlSelectState>{
    //     name: 'colors',
    //     value: 'red',
    //     type: "select",
    //     label: 'Favourite color',
    //     options: [
    //       {
    //         id: '1',
    //         value: 'Blue'
    //       },
    //       {
    //         id: '2',
    //         value: 'Red'
    //       },
    //       {
    //         id: '1',
    //         value: 'White'
    //       },
    //     ]
    //   }
    // }
  ]
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dynamicFormService: DynamicFormService) {
  }

  ngOnInit(): void {
    this.formData = this.dynamicFormService.getData(dynamicForm);
    this.formGroup = this.dynamicFormService.formRecord(dynamicForm);
    console.log(this.formData, this.formGroup)
  }

  formData: any;
  formGroup: any;


}
