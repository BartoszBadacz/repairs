import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ControlByName} from "../../../../../models/form/formConfig";

@Component({
  selector: 'app-repair-form-repair-progress-section',
  templateUrl: './repair-form-repair-progress-section.component.html',
  styleUrls: ['./repair-form-repair-progress-section.component.scss']
})
export class RepairFormRepairProgressSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() form_group!: FormGroup;
  @Input() form_config!: ControlByName | undefined;
  @Input() title!: string;
}
