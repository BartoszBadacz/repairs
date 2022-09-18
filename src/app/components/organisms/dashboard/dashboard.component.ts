import {Component, OnInit} from '@angular/core';
import {
  DynamicFormState, FormControlSelectState,
  FormControlTextState
} from "../../../models/form/dynamic-form.state";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  dynamicForm: DynamicFormState = {
    title: 'Przykładowy formularz testowy',
    isNullable: false,
    controls: [
      {
        type: "text",
        state: <FormControlTextState>{
          type: "text",
          label: 'Label do Text',
          name: 'firstName',
          value: 'Bartosz'
        }
      },
      {
        type: "select",
        state: <FormControlSelectState>{
          name: 'colors',
          value: 'red',
          type: "select",
          label: 'Favourite color',
          options: [
            {
              id: '1',
              value: 'Blue'
            },
            {
              id: '2',
              value: 'Red'
            },
            {
              id: '1',
              value: 'White'
            },
          ]
        }
      }
    ]
  }

}
