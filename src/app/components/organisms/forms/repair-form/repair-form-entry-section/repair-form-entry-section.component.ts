import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {
  FormSectionConfigType
} from "../../../../../models/form/form-section-config.type";

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

  errorMessageHandler(controlName: string) {
    return (
      this.form_group.controls![`${controlName}`].status === 'INVALID' &&
      this.form_group.controls![`${controlName}`].touched) ?
      'Pole jest wymagane' :
      '';
  }

  isValid(): void {
    this.isSectionValid = this.form_group.valid;
  }

  @Input() form_group!: FormGroup;
  @Input() form_config!: FormSectionConfigType;
  @Input() isSectionDisabled!: boolean;
}
