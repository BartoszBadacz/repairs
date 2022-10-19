import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function hasDupaValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value;
    if (!value) {
      return null
    }

    const hasDupaInside = value.includes('dupa');
    return !hasDupaInside ? {dupaStrength: true} : null

  }
}
