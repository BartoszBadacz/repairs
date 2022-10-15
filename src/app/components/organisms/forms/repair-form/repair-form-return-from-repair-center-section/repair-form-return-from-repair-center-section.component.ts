import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {
  FormSectionConfigType
} from "../../../../../models/form/form-section-config.type";

@Component({
  selector: 'app-repair-form-return-from-repair-center-section',
  templateUrl: './repair-form-return-from-repair-center-section.component.html',
  styleUrls: ['./repair-form-return-from-repair-center-section.component.scss']
})
export class RepairFormReturnFromRepairCenterSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isSectionValid: boolean = false;

  isValid(): void {
    this.isSectionValid = this.form_group.valid;
  }

  @Input() form_group!: FormGroup;
  @Input() form_config!: FormSectionConfigType;
  @Input() isSectionDisabled!: boolean;
}
