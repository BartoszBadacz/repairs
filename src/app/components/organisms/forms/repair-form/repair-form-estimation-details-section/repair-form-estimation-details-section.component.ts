import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ControlByName} from "../../../../../models/form/form.state";

@Component({
  selector: 'app-repair-form-estimation-details-section',
  templateUrl: './repair-form-estimation-details-section.component.html',
  styleUrls: ['./repair-form-estimation-details-section.component.scss']
})
export class RepairFormEstimationDetailsSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() form_group!: FormGroup;
  @Input() form_config!: ControlByName | undefined;
  @Input() title!: string;
}
