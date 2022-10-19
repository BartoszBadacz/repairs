import {FormControl, FormGroup, Validators} from "@angular/forms";
import {hasDupaValidator} from "../../../../custom-validators/hasDupaValidator";

export const repairFormGroup = new FormGroup({
  repairEntrySection: new FormGroup({
    dateOfEntry: new FormControl<string>('', [Validators.required]),
    itemRef: new FormControl<string>('', [hasDupaValidator]),
    itemNumber: new FormControl<string>('', [Validators.required]),
    customerAcc: new FormControl<string>('', [Validators.required]),
    customerName: new FormControl<string>('', [Validators.required]),
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

  }),
  customerDecisionSection: new FormGroup({
    dateOfDecision: new FormControl('', [Validators.required]),
    customerDecisionNumber: new FormControl('', [Validators.required]),
    typeOfDecision: new FormControl('', [Validators.required]),
    discount: new FormControl('')
  }),
  repairProgressSection: new FormGroup({
    dateOfSentToRepairCenter: new FormControl('', [Validators.required]),
    serviceRequestNumber: new FormControl('', [Validators.required]),

  }),
  repairReturnFromRepairCenterSection: new FormGroup({
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
