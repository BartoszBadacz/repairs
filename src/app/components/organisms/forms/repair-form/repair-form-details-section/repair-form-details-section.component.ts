import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {
  FormSectionConfig
} from "../../../../../models/form/formConfig";

@Component({
  selector: 'app-repair-form-details-section',
  templateUrl: './repair-form-details-section.component.html',
  styleUrls: ['./repair-form-details-section.component.scss']
})
export class RepairFormDetailsSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() form_group!: FormGroup;
  @Input() form_config!: FormSectionConfig;
  @Input() title!: string;
}
