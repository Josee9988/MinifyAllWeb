import {FormControl} from '@angular/forms';

/**
 * Summary: function used in the components with forms. Implements a function to calculate the value of a progress bar,
 * validation of all the inputs, global error messages, and clear all the values of the inputs.
 */
export abstract class Forms {
  /**
   * Array of 'FormControl' inputs, that will be evaluated and checked if they are valid or not,
   * also this inputs array is used to display the progress bar value.
   */
  public inputs: Array<FormControl>;

  /**
   * Summary: onSubmit is the function called by the submit button from the view.
   */
  abstract onSubmit(): void;

  /**
   * Summary: checks if the input has any error, and if that is the case it will return a string
   * with the error found, giving some information, if there is not an error it will simply return an empty string.
   *
   * Description: function that receives a FormControl field, and checks if it has the errors: 'required', 'minlength',
   * 'maxlength', 'min', 'max', 'email', or 'pattern'. If so, it will return a string with the first error found of the
   * mentioned ones. If the field is valid and there are not any errors it will return an empty string.
   *
   * @return string of the first error found, otherwise an empty string.
   */
  public getErrorMessage(formField: FormControl): string {
    return formField.hasError('required') ? 'This field is required.' :
      formField.hasError('minlength') ? `You must introduce at least ${formField.errors.minlength.requiredLength} characters,
          but we found ${formField.errors.minlength.actualLength} characters.` :
        formField.hasError('maxlength') ? `You must introduce ${formField.errors.maxlength.requiredLength} characters at maximum,
            but we found the value ${formField.errors.maxlength.actualLength}.` :
          formField.hasError('min') ? `You must introduce a numeric value bigger than ${formField.errors.min.min},
            but we found the value ${formField.errors.min.actual}.` :
            formField.hasError('max') ? `You must introduce a numeric value smaller than ${formField.errors.max.max},
                but we found the value ${formField.errors.max.actual}.` :
              formField.hasError('email') ? `You must introduce a valid email.` :
                formField.hasError('pattern') ? `This field does not meet with the given specification,
                            the value ${formField.errors.pattern.actualValue} is not correct or it is wrongly formed.` :
                  '';
  }

  /**
   * Summary: getProgressBarValue return a number between 100 and 0 that represents the % of
   * valid inputs, to be used in progress bar visual elements.
   *
   * @return number between 100 and 0, depending of the number of valid inputs found.
   */
  public getProgressBarValue(): number {
    let progress = 100;
    for (const input of this.inputs) {
      if (input.invalid) {
        progress -= 100 / this.inputs.length;
      }
    }
    return progress;
  }

  /**
   * Summary: validateInputs checks if all the inputs are valid, if that is the case it will
   * return true, otherwise false.
   *
   * @return true if all the inputs are true, if any input is not valid it will return false.
   */
  public validateInputs(): boolean {
    let areInputsValid = true;
    for (const input of this.inputs) {
      if (input.invalid) {
        areInputsValid = false;
      }
    }
    return areInputsValid;
  }
}
