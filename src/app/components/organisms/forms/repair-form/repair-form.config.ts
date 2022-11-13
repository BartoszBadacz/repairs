import {FormConfigType} from "../../../../models/form/form-config.type";
import {
  SelectControlState
} from "../../../../models/form/select-control-state.type";
import {
  InputControlState
} from "../../../../models/form/input-control-state.type";

export const repairFormConfig: FormConfigType = {
  formTitle: 'Nowa naprawa',
  sections: {
    repairEntrySection: {
      sectionTitle: "Informacje podstawowe",
      controls: {
        dateOfEntry: <InputControlState>{
          name: 'dateOfEntry',
          type: 'date',
          label: 'Data wprowadzenia',
          autocomplete: "off",
          isDisabled: false,
          required: true,
          errorMessage: 'Pole jest wymagane',
        },
        itemRef: <InputControlState>{
          name: 'itemRef',
          type: 'text',
          label: 'Numer REF',
          autocomplete: "off",
          isDisabled: false,
          placeholder: 'numer referencyjny urządzenia',
          required: true,
        },
        itemNumber: <InputControlState>{
          name: 'itemNumber',
          type: 'text',
          label: 'Numer seryjny / LOT',
          autocomplete: "off",
          isDisabled: false,
          required: true,
        },
        customerAcc: <InputControlState>{
          name: 'customerAcc',
          type: 'number',
          label: 'Numer konta klienta',
          autocomplete: "off",
          isDisabled: false,
          required: true,
        },
        customerName: <InputControlState>{
          name: 'customerName',
          type: 'text',
          label: 'Nazwa Klienta',
          autocomplete: "off",
          isDisabled: false,
          required: true,
        },
        customerDocumentNumber: <InputControlState>{
          name: 'customerDocumentNumber',
          type: 'text',
          label: 'Numer zgłoszenia klienta',
          autocomplete: "off",
          isDisabled: false,
        },
        vendor: <SelectControlState>{
          name: 'vendor',
          label: 'Dostawca',
          autocomplete: "off",
          isDisabled: false,
          required: true,
          options: [
            {
              name: "Conmed Belgia",
              id: '1'
            },
            {
              name: "Optilus Polska",
              id: '2'
            },
            {
              name: "MediCapture - Holandia",
              id: '3'
            }
          ]
        },
        initialNotes: <InputControlState>{
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
        repairType: <SelectControlState>{
          name: 'repairType',
          label: 'Typ naprawy',
          autocomplete: "off",
          isDisabled: false,
          options: [
            {
              name: "Naprawa płatna",
              id: '1'
            },
            {
              name: "Gwarancja - Linvatec USA",
              id: '2'
            },
            {
              name: "Gwarancja - Linvatec PL",
              id: '3'
            },
            {
              name: "Gwarancja po naprawie - Linvatec USA",
              id: '4'
            },
            {
              name: "Gwarancja po naprawie - Linvatec PL",
              id: '5'
            },
            {
              name: "Naprawa wewnętrzna - koszt Linvatec PL",
              id: '6'
            },
            {
              name: "Nie podlega naprawie",
              id: '7'
            },
          ]
        },
        notes: <InputControlState>{
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
        dateOfPriceQuotation: <InputControlState>{
          name: 'dateOfPriceQuotation',
          type: 'date',
          label: 'Data wystawienia kosztorysu',
          autocomplete: "off",
          isDisabled: false,
        },
        priceQuotationNumber: <InputControlState>{
          name: 'priceQuotationNumber',
          type: 'text',
          label: 'Numer kosztorysu',
          autocomplete: "off",
          isDisabled: false,
        },
        priceQuotationValue: <InputControlState>{
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
        dateOfDecision: <InputControlState>{
          name: 'dateOfDecision',
          type: 'date',
          label: 'Data decyzji klienta',
          autocomplete: "off",
          isDisabled: false,
        },
        customerDecisionNumber: <InputControlState>{
          name: 'customerDecisionNumber',
          type: 'text',
          label: 'Numer decyzji klienta',
          autocomplete: "off",
          isDisabled: false,
        },
        typeOfDecision: <SelectControlState>{
          name: 'typeOfDecision',
          label: 'Rodzaj decyzji klienta',
          autocomplete: "off",
          isDisabled: false,
          options: [
            {
              name: "Akceptacja",
              id: '1'
            },
            {
              name: "Odmowa",
              id: '2'
            },
            {
              name: "Brak decyzji",
              id: '3'
            },
          ]
        },
        discount: <InputControlState>{
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
        dateOfSentToRepairCenter: <InputControlState>{
          name: 'dateOfSentToRepairCenter',
          type: 'date',
          label: 'Data wysyłki do naprawy',
          autocomplete: "off",
          isDisabled: false,
        },
        serviceRequestNumber: <InputControlState>{
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
        dateOfReturnFromRepairCenter: <InputControlState>{
          name: 'dateOfReturnFromRepairCenter',
          type: 'date',
          label: 'Data powrotu z serwisu',
          autocomplete: "off",
          isDisabled: false,
        },
        costOfRepair: <InputControlState>{
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
        invoiceValue: <InputControlState>{
          name: 'invoiceValue',
          type: 'number',
          label: 'Wartość fakturowana',
          autocomplete: "off",
          isDisabled: false,
        },
        invoiceSystemOrderNumber: <InputControlState>{
          name: 'invoiceSystemOrderNumber',
          type: 'number',
          label: 'Numer zamówienia Oracle',
          autocomplete: "off",
          isDisabled: false,
        },
        invoiceNumber: <InputControlState>{
          name: 'invoiceNumber',
          type: 'number',
          label: 'Numer faktury',
          autocomplete: "off",
          isDisabled: false,
        },
        returnDocNumber: <InputControlState>{
          name: 'returnDocNumber',
          type: 'text',
          label: 'Numer WZ',
          autocomplete: "off",
          isDisabled: false,
        },
        dateOfClosureDate: <InputControlState>{
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
