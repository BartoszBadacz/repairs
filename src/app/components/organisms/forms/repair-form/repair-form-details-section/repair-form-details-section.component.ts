import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ControlByName} from "../../../../../models/form/form.state";

@Component({
  selector: 'app-repair-form-details-section',
  templateUrl: './repair-form-details-section.component.html',
  styleUrls: ['./repair-form-details-section.component.scss']
})
export class RepairFormDetailsSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() _form_group!: FormGroup;
  @Input() _form_config!: ControlByName | undefined;
  @Input() _title!: string;
}