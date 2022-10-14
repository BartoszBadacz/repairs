import {Component, OnInit} from '@angular/core';
import {repairFormConfig} from "./repair-form.config";
import {repairFormGroup} from "./repair-form-group";

@Component({
  selector: 'app-repair-form',
  templateUrl: './repair-form.component.html',
  styleUrls: ['./repair-form.component.scss']
})
export class RepairFormComponent implements OnInit {

  constructor() {
  }

  formTemplateConfig = repairFormConfig;
  form = repairFormGroup;


  isRepairEntrySectionValid: boolean =
    this.form.controls.repairEntrySection.valid;
  isRepairDetailsSectionValid: boolean =
    this.form.controls.repairDetailsSection.valid;
  isEstimationDetailSectionValid: boolean =
    this.form.controls.estimationDetailsSection.valid;
  isCustomerDecisionSectionValid: boolean =
    this.form.controls.customerDecisionSection.valid;
  isRepairProgressSectionValid: boolean =
    this.form.controls.repairProgressSection.valid;
  isRepairReturnFromRepairCenterSectionValid =
    this.form.controls.repairReturnFromRepairCenterSection.valid;
  isRepairReturnSectionValid: boolean =
    this.form.controls.repairReturnSection.valid;

  onSubmit() {
    console.log(this.form.value)
  }

  ngOnInit(): void {
  }

}
