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

  isRepairEntrySectionValid!: boolean;
  isRepairDetailsSectionValid!: boolean;
  isEstimationDetailSectionValid!: boolean;
  isCustomerDecisionSectionValid!: boolean;
  isRepairProgressSectionValid!: boolean;
  isRepairReturnFromRepairCenterSectionValid!: boolean;
  isRepairReturnSectionValid!: boolean;

  onSubmit() {
    console.log(this.form.value)
  }

  ngOnInit(): void {
    this.initSectionsValidationsSubscription()
  }

  private initSectionsValidationsSubscription() {
    this.form.valueChanges.subscribe(value => {
      this.isRepairEntrySectionValid = this.form.controls.repairEntrySection.valid;
      this.isRepairDetailsSectionValid = this.form.controls.repairDetailsSection.valid;
      this.isEstimationDetailSectionValid = this.form.controls.estimationDetailsSection.valid;
      this.isCustomerDecisionSectionValid = this.form.controls.customerDecisionSection.valid;
      this.isRepairProgressSectionValid = this.form.controls.repairProgressSection.valid;
      this.isRepairReturnFromRepairCenterSectionValid = this.form.controls.repairReturnFromRepairCenterSection.valid;
      this.isRepairReturnSectionValid = this.form.controls.repairReturnSection.valid;
    })
  }

}
