import {FormConfigType} from "../../../../models/form/form-config.type";

export const repairFormConfig: FormConfigType = {
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
      }
    },
    customerDecisionSection: {
      sectionTitle: "Decyzja klienta",
      controls: {
        dateOfDecision: {
          name: 'dateOfDecision',
          type: 'date',
          label: 'Data decyzji klienta',
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
        },
        typeOfDecision: {
          name: 'typeOfDecision',
          type: 'text',
          label: 'Rodzaj decyzji klienta',
          errorMessage: '',
          autocomplete: "off",
          isDisabled: false,
        },
        discount: {
          name: 'discount',
          type: 'text',
          label: 'Rabat',
          errorMessage: '',
          autocomplete: "off",
          isDisabled: false,
        },
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
      }
    },
    repairReturnFromRepairCenterSection: {
      sectionTitle: 'Zwrot z Serwisu',
      controls: {
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
