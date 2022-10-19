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
          autocomplete: "off",
          isDisabled: false,
          required: true,
          errorMessage: 'Pole jest wymagane',
        },
        itemRef: {
          name: 'itemRef',
          type: 'text',
          label: 'Numer REF',
          autocomplete: "off",
          isDisabled: false,
          placeholder: 'numer referencyjny urządzenia',
          required: true,
        },
        itemNumber: {
          name: 'itemNumber',
          type: 'text',
          label: 'Numer seryjny / LOT',
          autocomplete: "off",
          isDisabled: false,
          required: true,
        },
        customerAcc: {
          name: 'customerAcc',
          type: 'number',
          label: 'Numer konta klienta',
          autocomplete: "off",
          isDisabled: false,
          required: true,
        },
        customerName: {
          name: 'customerName',
          type: 'text',
          label: 'Nazwa Klienta',
          autocomplete: "off",
          isDisabled: false,
          required: true,
        },
        customerDocumentNumber: {
          name: 'customerDocumentNumber',
          type: 'text',
          label: 'Numer zgłoszenia klienta',
          autocomplete: "off",
          isDisabled: false,
        },
        vendor: {
          name: 'vendor',
          type: 'text',
          label: 'Dostawca',
          autocomplete: "off",
          isDisabled: false,
          required: true,
        },
        initialNotes: {
          name: 'initialNotes',
          type: 'text',
          label: 'Notatki',
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
          autocomplete: "off",
          isDisabled: false,
        },
        notes: {
          name: 'notes',
          type: 'text',
          label: 'Opis uszkodzeń',
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
          autocomplete: "off",
          isDisabled: false,
        },
        priceQuotationNumber: {
          name: 'priceQuotationNumber',
          type: 'text',
          label: 'Numer kosztorysu',
          autocomplete: "off",
          isDisabled: false,
        },
        priceQuotationValue: {
          name: 'priceQuotationValue',
          type: 'number',
          label: 'Kwota kosztorysu',
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
          autocomplete: "off",
          isDisabled: false,
        },
        customerDecisionNumber: {
          name: 'customerDecisionNumber',
          type: 'text',
          label: 'Numer decyzji klienta',
          autocomplete: "off",
          isDisabled: false,
        },
        typeOfDecision: {
          name: 'typeOfDecision',
          type: 'text',
          label: 'Rodzaj decyzji klienta',
          autocomplete: "off",
          isDisabled: false,
        },
        discount: {
          name: 'discount',
          type: 'text',
          label: 'Rabat',
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
          autocomplete: "off",
          isDisabled: false,
        },
        serviceRequestNumber: {
          name: 'serviceRequestNumber',
          type: 'text',
          label: 'Numer zgłoszenia serwisowego',
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
          autocomplete: "off",
          isDisabled: false,
        },
        costOfRepair: {
          name: 'costOfRepair',
          type: 'number',
          label: 'Koszt naprawy',
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
          autocomplete: "off",
          isDisabled: false,
        },
        invoiceSystemOrderNumber: {
          name: 'invoiceSystemOrderNumber',
          type: 'number',
          label: 'Numer zamówienia Oracle',
          autocomplete: "off",
          isDisabled: false,
        },
        invoiceNumber: {
          name: 'invoiceNumber',
          type: 'number',
          label: 'Numer faktury',
          autocomplete: "off",
          isDisabled: false,
        },
        returnDocNumber: {
          name: 'returnDocNumber',
          type: 'text',
          label: 'Numer WZ',
          autocomplete: "off",
          isDisabled: false,
        },
        dateOfClosureDate: {
          name: 'dateOfClosureDate',
          type: 'date',
          label: 'Data odesłania do klienta',
          autocomplete: "off",
          isDisabled: false,
        }
      }
    }
  }
}
