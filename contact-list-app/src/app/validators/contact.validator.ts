import { AbstractControl } from '@angular/forms';

export class ContactValidator {
  static phoneValidator(control: AbstractControl) {
    const invalidError = { invalidPhoneNumber: true };

    const value: string = control.value;

    const numberRegexp = /^[0-9]+$/;

    if (!value || !numberRegexp.test(value) || value.length > 15 || value.length < 8)
      return invalidError;

    return null;
  }
}
