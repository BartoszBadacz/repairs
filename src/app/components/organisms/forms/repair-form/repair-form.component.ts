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
    sections: {
      repairEntrySection: {
        dateOfEntry: {
          name: 'dateOfEntry',
          type: 'date',
          label: 'Data wprowadzenia',
          errorMessage: 'pole jest wymagane',
          autocomplete: "off",
          disabled: false,
        },
        itemRef: {
          name: 'itemRef',
          type: 'text',
          label: 'Numer Ref',
          errorMessage: 'pole jest wymagane',
          autocomplete: "off",
          disabled: false,
        },
        itemNumber: {
          name: 'itemNumber',
          type: 'text',
          label: 'Numer seryjny / LOT',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
        },
        customerAcc: {
          name: 'customerAcc',
          type: 'number',
          label: 'Numer konta klienta',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
        },
        customerName: {
          name: 'customerName',
          type: 'text',
          label: 'Nazwa Klienta',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
        },
        customerDocumentNumber: {
          name: 'customerDocumentNumber',
          type: 'text',
          label: 'Numer zgłoszenia klienta',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
        },
        vendor: {
          name: 'vendor',
          type: 'text',
          label: 'Dostawca',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
        },
        initialNotes: {
          name: 'initialNotes',
          type: 'text',
          label: 'Notatki',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
        },
      },
      repairDetailsSection: {
        repairType: {
          name: 'repairType',
          type: 'text',
          label: 'Typ naprawy',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
        },
        notes: {
          name: 'notes',
          type: 'text',
          label: 'Opis uszkodzeń',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
        }
      },
      estimationDetailsSection: {
        dateOfPriceQuotation: {
          name: 'dateOfPriceQuotation',
          type: 'date',
          label: 'Data wystawienia kosztorysu',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
        },
        priceQuotationNumber: {
          name: 'priceQuotationNumber',
          type: 'text',
          label: 'Numer kosztorysu',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
        },
        priceQuotationValue: {
          name: 'priceQuotationValue',
          type: 'number',
          label: 'Kwota kosztorysu',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
        },
        dateOfDecision: {
          name: 'dateOfDecision',
          type: 'date',
          label: 'Data decyzji klienta',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
        },
        typeOfDecision: {
          name: 'typeOfDecision',
          type: 'text',
          label: 'Rodzaj decyzji klienta',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
        },
        customerDecisionNumber: {
          name: 'customerDecisionNumber',
          type: 'text',
          label: 'Numer decyzji klienta',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
        }
      },
      repairProgressSection: {
        dateOfSentToRepairCenter: {
          name: 'dateOfSentToRepairCenter',
          type: 'date',
          label: 'Data wysyłki do naprawy',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
        },
        serviceRequestNumber: {
          name: 'serviceRequestNumber',
          type: 'text',
          label: 'Numer zgłoszenia serwisowego',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
        },
        dateOfReturnFromRepairCenter: {
          name: 'dateOfReturnFromRepairCenter',
          type: 'date',
          label: 'Data powrotu z serwisu',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
        },
        costOfRepair: {
          name: 'costOfRepair',
          type: 'number',
          label: 'Koszt naprawy',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
        },
      },
      repairReturnSection: {
        invoiceValue: {
          name: 'invoiceValue',
          type: 'number',
          label: 'Wartość fakturowana',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
        },
        invoiceSystemOrderNumber: {
          name: 'invoiceSystemOrderNumber',
          type: 'number',
          label: 'Numer zamówienia Oracle',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
        },
        invoiceNumber: {
          name: 'invoiceNumber',
          type: 'number',
          label: 'Numer faktury',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
        },
        returnDocNumber: {
          name: 'returnDocNumber',
          type: 'text',
          label: 'Numer WZ',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
        },
        dateOfClosureDate: {
          name: 'dateOfClosureDate',
          type: 'date',
          label: 'Data odesłania do klienta',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
        }
      }
    }
  }

  formDesc = {
    title: 'Nowa Naprawa',
    errorDesc: {
      required: 'Pole jest wymagane',
    },
    sections: {
      repairEntry: {
        title: 'Informacje podstawowe',
        labels: {
          dateOfEntry: 'Data wprowadzenia:',
          itemRef: 'Numer REF:',
          itemNumber: 'Numer seryjny / LOT:',
          customerName: 'Nazwa klienta:',
          customerAcc: 'Numer klienta:',
          customerDocumentNumber: 'Numer Zgłoszenia klienta,',
          vendor: 'Dostawca',
          initialNotes: 'Informacje dodatkowe'
        },
      },
      repairDetails: {
        title: 'Informacje o urządzeniu',
        labels: {
          repairType: 'Rodzaj naprawy',
          notes: 'Notatki'
        }
      },
      estimationDetails: {
        title: 'Informacje o kosztorysie',
        labels: {
          dateOfPriceQuotation: 'Data wystawienia kosztorysu:',
          priceQuotationNumber: 'Numer kosztorysu',
          priceQuotationValue: 'Kwota Kosztorysu',
          dateOfDecision: 'Data decyzji',
          typeOfDecision: 'Typ decyzji',
          customerDecisionNumber: 'Numer Decyzji'
        }
      },
      repairProgress: {
        title: 'Proces naprawy',
        labels: {
          dateOfSentToRepairCenter: 'Data wysyłki do naprawy',
          serviceRequestNumber: 'Numer zgłoszenia serwisowego',
          dateOfReturnFromRepairCenter: 'Data powrotu z serwisu',
          costOfRepair: 'Koszty wewnętrzne naprawy',
        }
      },
      repairReturn: {
        title: 'Zwrot do klienta',
        labels: {
          invoiceValue: 'Kwota zafakturowana',
          returnComments: 'Notatki',
          invoiceSystemOrderNumber: 'Numer zamówienia Oracle',
          invoiceNumber: 'Numer FV',
          returnDocNumber: 'Numer dokumentu zwrotu',
          dateOfClosureDate: 'Data zwrotu do klienta'
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
