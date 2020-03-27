import {Component, OnInit} from '@angular/core';
import {ILanguagesInterface} from './ILanguages.interface';
import {Forms} from '../../../shared/classes/Forms.class';
import {SnackbarDisplayerService} from '../../../shared/services/snackbar-displayer.service';
import {SnackbarTypeEnum} from '../../../shared/enums/Snackbar-type.enum';
import {FormControl, Validators} from '@angular/forms';
import {CopyClipboardService} from '../../../shared/services/copy-clipboard.service';
import {DetectLanguageService} from '../../../shared/services/detect-language.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent extends Forms implements OnInit {
  languageSelected = 0;
  minifiedCode = '';
  isHexMinifierEnabled: boolean;
  nonMinifiedCode: FormControl;
  languages: ILanguagesInterface[] = [
    {value: 0, viewValue: 'Auto detect on paste', faIcon: 'fas fa-magic'},
    {value: 1, viewValue: 'HTML', faIcon: 'fab fa-html5'},
    {value: 2, viewValue: 'CSS', faIcon: 'fab fa-css3-alt'},
    {value: 3, viewValue: 'JSON', faIcon: 'fas fa-code'},
  ];

  constructor(
    private snackbarDisplayerService: SnackbarDisplayerService,
    private copyClipboardService: CopyClipboardService,
    private detectLanguage: DetectLanguageService) {
    super();
  }

  ngOnInit() {
    this.nonMinifiedCode = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.inputs = [this.nonMinifiedCode];
  }

  onSubmit(isSilent = false) {
    if (this.validateInputs()) { // inputs are OK
      this.nonMinifiedCode.setValue(this.nonMinifiedCode.value.trim()); // text trimmed
      if (this.languageSelected === 0) { // AUTO DETECT LANGUAGE
        this.languageSelected = this.detectLanguage.detectLanguage(this.nonMinifiedCode.value);
      }
      // TODO: minify the code


    } else if (!isSilent) { // error while validating
      this.snackbarDisplayerService.openSnackBar('Error while validating fields.', SnackbarTypeEnum.warning);
    }
  }

  /**
   * Summary: receives a string to be copied and copies it to the clipboard. If it can't be copied
   * it will notify the user.
   */
  onCopyUrl() {
    const selectedLanguageLabel = this.getLanguageFromSelected().viewValue;
    if (this.copyClipboardService.copyToClipboard(this.minifiedCode, selectedLanguageLabel)) {
      this.snackbarDisplayerService.openSnackBar('Code copied to the clipboard', SnackbarTypeEnum.success);
    } else {
      this.snackbarDisplayerService.openSnackBar(
        'The code could not be copied to the clipboard, copy it yourself!.', SnackbarTypeEnum.warning);
    }
  }

  /**
   * Obtains the ILanguagesInterface from the selected language.
   */
  private getLanguageFromSelected(): ILanguagesInterface {
    return this.languages.find((language) => language.value === this.languageSelected);
  }
}
