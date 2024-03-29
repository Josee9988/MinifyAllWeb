import {Component, OnInit} from '@angular/core';
import {ILanguagesInterface} from './ILanguages.interface';
import {Forms} from '../../shared/classes/Forms.class';
import {SnackbarDisplayerService} from '../../shared/services/snackbar-displayer.service';
import {SnackbarTypeEnum} from '../../shared/enums/Snackbar-type.enum';
import {FormControl, Validators} from '@angular/forms';
import {CopyClipboardService} from '../../shared/services/copy-clipboard.service';
import {DetectLanguageService} from '../../shared/services/detect-language.service';
import {LanguagesEnum} from '../../shared/enums/Languages.enum';
import {MinifyAllClass} from '@josee9988/minifyall';
import * as Terser from 'terser';
import {Meta, Title} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-minifier.component.html',
  styleUrls: ['./home-minifier.component.scss']
})
export class HomeMinifierComponent extends Forms implements OnInit {
  languageSelected = 0;
  minifiedCode = '';
  isProcessing = false;
  domainUrl: string = environment.domainUrl;
  isHexMinifierEnabled = false;
  nonMinifiedCode: FormControl;
  languages: ILanguagesInterface[] = [
    {value: 0, viewValue: 'Auto-detect on paste', faIcon: 'fas fa-magic'},
    {value: 1, viewValue: 'HTML', faIcon: 'fab fa-html5'},
    {value: 2, viewValue: 'CSS', faIcon: 'fab fa-css3-alt'},
    {value: 3, viewValue: 'JSON/JSONC', faIcon: 'fas fa-code'},
    {value: 4, viewValue: 'JavaScript (with Terser)', faIcon: 'fab fa-js-square'}
  ];

  constructor(
    private snackbarDisplayerService: SnackbarDisplayerService,
    private copyClipboardService: CopyClipboardService,
    private detectLanguage: DetectLanguageService,
    private title: Title,
    private meta: Meta) {
    super();
  }

  ngOnInit() {
    this.title.setTitle('MinifyAll - minifyall.jgracia.es');
    this.meta.updateTag({
      name:
        'Online code minifier for CSS, JSON, JSONC and JavaScript. Minify instantly your programming code simple, smooth and fast!'
    });
    this.nonMinifiedCode = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.inputs = [this.nonMinifiedCode];
  }

  onSubmit(isSilent = false) {
    if (this.validateInputs()) { // inputs are OK
      this.isProcessing = true;
      if (this.languageSelected === 0) { // AUTO-DETECT LANGUAGE
        this.autoDetectCode();
      }
      this.nonMinifiedCode.setValue(this.nonMinifiedCode.value.trim()); // trim code
      this.minifyCode(this.nonMinifiedCode.value.split('\n')); // minify the code
      this.isProcessing = false;
    } else if (!isSilent) { // error while validating
      this.snackbarDisplayerService.openSnackBar('Error while validating fields.', SnackbarTypeEnum.warning);
    }
  }

  /**
   * Summary: auto-detects the language.
   * @param $event the paste event.
   */
  autoDetectCode($event: any = null): void {
    if ($event) {
      $event.preventDefault();
      this.languageSelected = this.detectLanguage.detectLanguage($event.clipboardData.getData('text'));
      this.nonMinifiedCode.setValue($event.clipboardData.getData('text'));
      this.onSubmit(true);
    } else {
      this.languageSelected = this.detectLanguage.detectLanguage(this.nonMinifiedCode.value);
    }
  }

  /**
   * Summary: receives a string to be copied and copies it to the clipboard. If it can't be copied
   * it will notify the user.
   */
  onCopyText(): void {
    const selectedLanguageLabel = this.getLanguageFromSelected().viewValue;
    if (this.copyClipboardService.copyToClipboard(this.minifiedCode, selectedLanguageLabel)) {
      this.snackbarDisplayerService.openSnackBar('Code copied to the clipboard', SnackbarTypeEnum.success);
    } else {
      this.snackbarDisplayerService.openSnackBar(
        'The code could not be copied to the clipboard, copy it yourself!.', SnackbarTypeEnum.warning);
    }
  }

  /**
   * Summary: selects the whole text of an html input.
   * @param id the id of the input.
   */
  onSelectText(id: string) {
    const input = document.getElementById(id) as HTMLInputElement;
    input.focus();
    input.select();
  }

  /**
   * Obtains the ILanguagesInterface from the selected language.
   */
  getLanguageFromSelected(): ILanguagesInterface {
    return this.languages.find((language) => language.value === this.languageSelected);
  }

  test() {
    console.log(this.isHexMinifierEnabled);
  }

  /**
   * Summary: initialises the Global minifier class and calls the right method.
   * @param source the given code to be minified as an array of strings (each element in the array refeers to one line)
   */
  private minifyCode(source: []): void {
    const minifier: MinifyAllClass = new MinifyAllClass(this.isHexMinifierEnabled);
    switch (this.languageSelected) {
      case LanguagesEnum.HTML: // HTML
        this.minifiedCode = minifier.minifyHtml(source);
        break;
      case LanguagesEnum.CSS: // CSS
        this.minifiedCode = minifier.minifyCssScssLessSass(source);
        break;
      case LanguagesEnum.JSON: // JSON
        this.minifiedCode = minifier.minifyJsonJsonc(source);
        break;
      case LanguagesEnum.JAVASCRIPT: // JAVASCRIPT
        const minifierJs: any = Terser.minify(source.join('\n'));
        if (minifierJs.error === undefined) {
          this.minifiedCode = minifierJs.code;
        } else {
          this.snackbarDisplayerService.openSnackBar('Error in the JavaScript code (Terser error)', SnackbarTypeEnum.error);
        }
        break;
      default: // ERROR
        this.snackbarDisplayerService.openSnackBar(
          'Unexpected error while minifying. Please tell us how this happened!', SnackbarTypeEnum.error);
        break;
    }
  }
}
