import {Component, OnInit} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {FormState} from "../../../../models/form/form.state";

@Component({
  selector: 'app-repair-form',
  templateUrl: './repair-form.component.html',
  styleUrls: ['./repair-form.component.scss']
})
export class RepairFormComponent implements OnInit {

  constructor() {
  }

  isOpened: boolean = true;

  newRepairFormConfig: FormState = {
    sections: {
      repairEntrySection: {
        dateOfEntry: {
          name: 'dateOfEntry',
          type: 'date',
          label: 'Data wprowadzenia',
          errorMessage: 'pole jest wymagane',
          autocomplete: "off",
          disabled: false,
          validators: [Validators.required]
        },
        itemRef: {
          name: 'itemRef',
          type: 'text',
          label: 'Numer Ref',
          errorMessage: 'pole jest wymagane',
          autocomplete: "off",
          disabled: false,
          validators: [Validators.required]
        },
        itemNumber: {
          name: 'itemNumber',
          type: 'text',
          label: 'Numer seryjny / LOT',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
          validators: [Validators.required]
        },
        customerAcc: {
          name: 'customerAcc',
          type: 'number',
          label: 'Numer konta klienta',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
          validators: [Validators.required]
        },
        customerName: {
          name: 'customerName',
          type: 'text',
          label: 'Nazwa Klienta',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
          validators: [Validators.required]
        },
        customerDocumentNumber: {
          name: 'customerDocumentNumber',
          type: 'text',
          label: 'Numer zgłoszenia klienta',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
          validators: [Validators.required]
        },
        vendor: {
          name: 'vendor',
          type: 'text',
          label: 'Dostawca',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
          validators: [Validators.required]
        },
        initialNotes: {
          name: 'initialNotes',
          type: 'text',
          label: 'Notatki',
          errorMessage: '',
          autocomplete: "off",
          disabled: false,
          validators: []
        },
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
