import {Component, OnInit} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {FormConfig} from "../../../../models/form/formConfig";

@Component({
  selector: 'app-repair-form',
  templateUrl: './repair-form.component.html',
  styleUrls: ['./repair-form.component.scss']
})
export class RepairFormComponent implements OnInit {

  constructor() {
  }

  repairFormConfig: FormConfig = {
    formTitle: 'Nowa naprawa',
    sections: {
      repairEntrySection: {
        sectionTitle: "Informacje podstawowe",
        controls: {
          dateOfEntry: {
            name: 'dateOfEntry',
            type: 'date',
            label: 'Data wprowadzenia',
            errorMessage: 'pole jest wymagane',
            autocomplete: "off",
            isDisabled: false,
          },
          itemRef: {
            name: 'itemRef',
            type: 'text',
            label: 'Numer REF',
            errorMessage: 'pole jest wymagane',
            autocomplete: "off",
            isDisabled: false,
            placeholder: 'numer referencyjny urządzenia'
          },
          itemNumber: {
            name: 'itemNumber',
            type: 'text',
            label: 'Numer seryjny / LOT',
            errorMessage: '',
            autocomplete: "off",
            isDisabled: false,
          },
          customerAcc: {
            name: 'customerAcc',
            type: 'number',
            label: 'Numer konta klienta',
            errorMessage: '',
            autocomplete: "off",
            isDisabled: false,
          },
          customerName: {
            name: 'customerName',
            type: 'text',
            label: 'Nazwa Klienta',
            errorMessage: '',
            autocomplete: "off",
            isDisabled: false,
          },
          customerDocumentNumber: {
            name: 'customerDocumentNumber',
            type: 'text',
            label: 'Numer zgłoszenia klienta',
            errorMessage: '',
            autocomplete: "off",
            isDisabled: false,
          },
          vendor: {
            name: 'vendor',
            type: 'text',
            label: 'Dostawca',
            errorMessage: '',
            autocomplete: "off",
            isDisabled: false,
          },
          initialNotes: {
            name: 'initialNotes',
            type: 'text',
            label: 'Notatki',
            errorMessage: '',
            autocomplete: "off",
            isDisabled: false,
          },
        }
      },
      repairDetailsSection: {
        sectionTitle: "Informacje o urządzeniu",
        controls: {
          repairType: {
            name: 'repairType',
            type: 'text',
            label: 'Typ naprawy',
            errorMessage: '',
            autocomplete: "off",
            isDisabled: false,
          },
          notes: {
            name: 'notes',
            type: 'text',
            label: 'Opis uszkodzeń',
            errorMessage: '',
            autocomplete: "off",
            isDisabled: false,
          }
        }
      },
      estimationDetailsSection: {
        sectionTitle: "Informacje o kosztorysie",
        controls: {
          dateOfPriceQuotation: {
            name: 'dateOfPriceQuotation',
            type: 'date',
            label: 'Data wystawienia kosztorysu',
            errorMessage: '',
            autocomplete: "off",
            isDisabled: false,
          },
          priceQuotationNumber: {
            name: 'priceQuotationNumber',
            type: 'text',
            label: 'Numer kosztorysu',
            errorMessage: '',
            autocomplete: "off",
            isDisabled: false,
          },
          priceQuotationValue: {
            name: 'priceQuotationValue',
            type: 'number',
            label: 'Kwota kosztorysu',
            errorMessage: '',
            autocomplete: "off",
            isDisabled: false,
          },
          dateOfDecision: {
            name: 'dateOfDecision',
            type: 'date',
            label: 'Data decyzji klienta',
            errorMessage: '',
            autocomplete: "off",
            isDisabled: false,
          },
          typeOfDecision: {
            name: 'typeOfDecision',
            type: 'text',
            label: 'Rodzaj decyzji klienta',
            errorMessage: '',
            autocomplete: "off",
            isDisabled: false,
          },
          customerDecisionNumber: {
            name: 'customerDecisionNumber',
            type: 'text',
            label: 'Numer decyzji klienta',
            errorMessage: '',
            autocomplete: "off",
            isDisabled: false,
          }
        }
      },
      repairProgressSection: {
        sectionTitle: "Proces naprawy",
        controls: {
          dateOfSentToRepairCenter: {
            name: 'dateOfSentToRepairCenter',
            type: 'date',
            label: 'Data wysyłki do naprawy',
            errorMessage: '',
            autocomplete: "off",
            isDisabled: false,
          },
          serviceRequestNumber: {
            name: 'serviceRequestNumber',
            type: 'text',
            label: 'Numer zgłoszenia serwisowego',
            errorMessage: '',
            autocomplete: "off",
            isDisabled: false,
          },
          dateOfReturnFromRepairCenter: {
            name: 'dateOfReturnFromRepairCenter',
            type: 'date',
            label: 'Data powrotu z serwisu',
            errorMessage: '',
            autocomplete: "off",
            isDisabled: false,
          },
          costOfRepair: {
            name: 'costOfRepair',
            type: 'number',
            label: 'Koszt naprawy',
            errorMessage: '',
            autocomplete: "off",
            isDisabled: false,
          },
        }
      },
      repairReturnSection: {
        sectionTitle: "Zwrot do klienta",
        controls: {
          invoiceValue: {
            name: 'invoiceValue',
            type: 'number',
            label: 'Wartość fakturowana',
            errorMessage: '',
            autocomplete: "off",
            isDisabled: false,
          },
          invoiceSystemOrderNumber: {
            name: 'invoiceSystemOrderNumber',
            type: 'number',
            label: 'Numer zamówienia Oracle',
            errorMessage: '',
            autocomplete: "off",
            isDisabled: false,
          },
          invoiceNumber: {
            name: 'invoiceNumber',
            type: 'number',
            label: 'Numer faktury',
            errorMessage: '',
            autocomplete: "off",
            isDisabled: false,
          },
          returnDocNumber: {
            name: 'returnDocNumber',
            type: 'text',
            label: 'Numer WZ',
            errorMessage: '',
            autocomplete: "off",
            isDisabled: false,
          },
          dateOfClosureDate: {
            name: 'dateOfClosureDate',
            type: 'date',
            label: 'Data odesłania do klienta',
            errorMessage: '',
            autocomplete: "off",
            isDisabled: false,
          }
        }
      }
    }
  }

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


  onSubmit() {
    console.log(this.form.value)
  }

  ngOnInit()
    :
    void {
  }

}
