import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ControlByName} from "../../../../../models/form/form.state";

@Component({
  selector: 'app-repair-form-repair-return-section',
  templateUrl: './repair-form-repair-return-section.component.html',
  styleUrls: ['./repair-form-repair-return-section.component.scss']
})
export class RepairFormRepairReturnSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() _form_group!: FormGroup;
  @Input() _form_config!: ControlByName | undefined;
  @Input() _title!: string;
}