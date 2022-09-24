import {Component, OnInit} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-exemplary-form',
  templateUrl: './exemplary-form.component.html',
  styleUrls: ['./exemplary-form.component.scss']
})
export class ExemplaryFormComponent implements OnInit {

  constructor() {
  }

  colorOptions: string[] = ['red', 'black', 'white'];

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
      }
    }
  }

  form = new FormGroup({})

  onSubmit() {
    console.log(this.form.value)
  }

  ngOnInit(): void {

  }

}
