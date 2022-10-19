import {Injectable} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ControlErrorService {

  constructor() {
  }

  message(formControl: AbstractControl): string {

    if (!formControl.untouched && formControl.hasError('required')) {
      return 'Pole jest wymagane'
    } else if (formControl.hasError('maxlength')) {
      return `Maksymalna ilość znaków: ${formControl.errors!['maxlength']['requiredLength']}`
    } else if (formControl.hasError('minlength')) {
      return `Minimalna ilość znaków: ${formControl.errors!['minlength']['requiredLength']}`
    } else if (formControl.touched && formControl.hasError('email')) {
      return 'Wprowadź prawidłowy e-mail'
    } else {
      return ''
    }
  }
}
