import {Component, OnInit} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {repairFormConfig} from "./repair-form.config";

@Component({
  selector: 'app-repair-form',
  templateUrl: './repair-form.component.html',
  styleUrls: ['./repair-form.component.scss']
})
export class RepairFormComponent implements OnInit {

  constructor() {
  }
  formTemplateConfig = repairFormConfig;

  form = new FormGroup({
    repairEntrySection: new FormGroup({
      dateOfEntry: new FormControl('', [Validators.required]),
      itemRef: new FormControl('', [Validators.required]),
      itemNumber: new FormControl('', [Validators.required]),
      customerName: new FormControl('', [Validators.required]),
      customerAcc: new FormControl('', [Validators.required]),
      customerDocumentNumber: new FormControl(''),
      vendor: new FormControl('', [Validators.required]),
      initialNotes: new FormControl(''),
    }),
    repairDetailsSection: new FormGroup({
      repairType: new FormControl('', [Validators.required]),
      notes: new FormControl(''),
    }),
    estimationDetailsSection: new FormGroup({
      dateOfPriceQuotation: new FormControl('', [Validators.required]),
      priceQuotationNumber: new FormControl('', [Validators.required]),
      priceQuotationValue: new FormControl('', [Validators.required]),
      dateOfDecision: new FormControl('', [Validators.required]),
      typeOfDecision: new FormControl('', [Validators.required]),
      customerDecisionNumber: new FormControl('', [Validators.required]),
    }),
    repairProgressSection: new FormGroup({
      dateOfSentToRepairCenter: new FormControl('', [Validators.required]),
      serviceRequestNumber: new FormControl('', [Validators.required]),
      dateOfReturnFromRepairCenter: new FormControl('', [Validators.required]),
      costOfRepair: new FormControl('', [Validators.required]),
    }),
    repairReturnSection: new FormGroup({
      invoiceValue: new FormControl('', [Validators.required]),
      invoiceSystemOrderNumber: new FormControl('', [Validators.required]),
      invoiceNumber: new FormControl('', [Validators.required]),
      returnDocNumber: new FormControl('', [Validators.required]),
      dateOfClosureDate: new FormControl('', [Validators.required]),
    })
  })

  isRepairEntrySectionValid: boolean = this.form.controls.repairEntrySection.valid;
  isRepairDetailsSectionValid: boolean = this.form.controls.repairDetailsSection.valid;
  isEstimationDetailSectionValid: boolean = this.form.controls.estimationDetailsSection.valid;
  isRepairProgressSectionValid: boolean = this.form.controls.repairProgressSection.valid;
  isRepairReturnSectionValid: boolean = this.form.controls.repairReturnSection.valid;

  onSubmit() {
    console.log(this.form.value)
  }

  ngOnInit()
    :
    void {
  }

}
