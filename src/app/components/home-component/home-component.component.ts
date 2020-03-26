import {Component, OnInit} from '@angular/core';
import {ILanguagesInterface} from './ILanguages.interface';
import {Forms} from '../../../shared/classes/Forms.class';
import {SnackbarDisplayerService} from '../../../shared/services/snackbar-displayer.service';
import {SnackbarTypeEnum} from '../../../shared/enums/Snackbar-type.enum';
import {FormControl, Validators} from '@angular/forms';
import {CopyClipboardService} from '../../../shared/services/copy-clipboard.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent extends Forms implements OnInit {
  languageSelected = 0;
  minifiedCode = '';
  nonMinifiedCode: FormControl;
  languages: ILanguagesInterface[] = [
    {value: 0, viewValue: 'Auto detect'},
    {value: 1, viewValue: 'CSS'},
    {value: 2, viewValue: 'HTML'},
    {value: 3, viewValue: 'JSON'},
  ];

  constructor(private snackbarDisplayerService: SnackbarDisplayerService, private copyClipboardService: CopyClipboardService) {
    super();
  }

  ngOnInit() {
    this.nonMinifiedCode = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.inputs = [this.nonMinifiedCode];
  }

  onSubmit() {
    if (this.validateInputs()) { // inputs are OK
    } else { // error while validating
      this.snackbarDisplayerService.openSnackBar('Error while validating fields.', SnackbarTypeEnum.warning);
    }
  }

  /**
   * Summary: receives a string to be copied and copies it to the clipboard. If it can't be copied
   * it will notify the user.
   *
   * @param code the url to be copied.
   */
  copyUrl(code: string) {
    const selectedLanguageLabel = this.languages.find((language) => language.value === this.languageSelected).viewValue;
    if (this.copyClipboardService.copyToClipboard(code, selectedLanguageLabel)) {
      this.snackbarDisplayerService.openSnackBar('Code copied to the clipboard', SnackbarTypeEnum.success);
    } else {
      this.snackbarDisplayerService.openSnackBar(
        'The code could not be copied to the clipboard, copy it yourself!.', SnackbarTypeEnum.warning);
    }
  }
}
