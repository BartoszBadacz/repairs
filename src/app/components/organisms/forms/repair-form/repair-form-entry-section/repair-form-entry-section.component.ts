import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {
  FormSectionConfig
} from "../../../../../models/form/formConfig";

@Component({
  selector: 'app-repair-form-entry-section',
  templateUrl: './repair-form-entry-section.component.html',
  styleUrls: ['./repair-form-entry-section.component.scss']
})
export class RepairFormEntrySectionComponent implements OnInit {

  constructor() {
  }

  isSectionValid: boolean = false;

  ngOnInit(): void {
  }

  isValid(): void {
    this.isSectionValid = this.form_group.valid;
  }

  @Input() form_group!: FormGroup;
  @Input() form_config!: FormSectionConfig;
}
