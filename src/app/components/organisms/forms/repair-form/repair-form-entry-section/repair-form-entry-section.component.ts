import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {
  FormSectionConfigType
} from "../../../../../models/form/form-section-config.type";
import {
  ControlErrorService
} from "../../../../../services/control-error.service";

@Component({
  selector: 'app-repair-form-entry-section',
  templateUrl: './repair-form-entry-section.component.html',
  styleUrls: ['./repair-form-entry-section.component.scss']
})
export class RepairFormEntrySectionComponent implements OnInit {

  constructor(public controlError: ControlErrorService) {
  }

  ngOnInit(): void {
  }

  @Input() form_group!: FormGroup;
  @Input() form_config!: FormSectionConfigType;
  @Input() isSectionDisabled!: boolean;
}
