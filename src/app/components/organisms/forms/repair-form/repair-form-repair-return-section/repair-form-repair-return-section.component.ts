import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {
  ControlByName,
  FormSectionConfig
} from "../../../../../models/form/formConfig";

@Component({
  selector: 'app-repair-form-repair-return-section',
  templateUrl: './repair-form-repair-return-section.component.html',
  styleUrls: ['./repair-form-repair-return-section.component.scss']
})
export class RepairFormRepairReturnSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() form_group!: FormGroup;
  @Input() form_config!: FormSectionConfig;
}
