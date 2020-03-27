import {Injectable} from '@angular/core';
import {LanguagesEnum} from '../enums/Languages.enum';
import {SnackbarDisplayerService} from './snackbar-displayer.service';
import {SnackbarTypeEnum} from '../enums/Snackbar-type.enum';

@Injectable({
  providedIn: 'root'
})
/**
 * Class that detects with the given text if the code source is CSS/HTML/JSON
 */
export class DetectLanguageService {

  constructor(private snackbarDisplayerService: SnackbarDisplayerService) {
  }

  /**
   * Summary: receives a code and guesses the programming language that it is written in.
   * @param source the programming code to analyze.
   */
  detectLanguage(source: string): LanguagesEnum {
    // HTML CODE
    if (source.match(/<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/) || source.match(/<(?:br|p)[^>{]*>|<\w+\s*>/gmi)) {
      return LanguagesEnum.HTML;

      // CSS AND JSON ARE POSITIVE (NOT SURE MESSAGE)
    } else if (source.match(/[\#\.\w\-\r\t]+(?=\s*\{)/) && (source.match(/{?(?<key>.*?):(?<val>["].*["]?|.*?)[,\W]\}/g) ||
      source.match(/(?:\s*\S+\s*{[^}]*})+/))) {
      this.displayNotSureMessage();
      return LanguagesEnum.CSS;

      // CSS CODE
    } else if (source.match(/[\#\.\w\-\r\t]+(?=\s*\{)/)) {
      return LanguagesEnum.CSS;

      // JSON CODE
    } else if (source.match(/{?(?<key>.*?):(?<val>["].*["]?|.*?)[,\W]\}/g) ||
      source.match(/(?:\s*\S+\s*{[^}]*})+/)) {
      return LanguagesEnum.JSON;

      // JAVASCRIPT
      // tslint:disable-next-line:max-line-length
    } else if (source.match(/^(?:[\s]+)?(?:const|let|var|)?(?:[a-z0-9.]+(?:\.prototype)?)?(?:\s)?(?:[a-z0-9-_]+\s?=)?\s?(?:[a-z0-9]+\s+\:\s+)?(?:function\s?)?(?:[a-z0-9_-]+)?\s?\(.*\)\s?(?:.+)?([=>]:)?\{(?:(?:[^}{]+|\{(?:[^}{]+|\{[^}{]*\})*\})*\}(?:\s?\(.*\)\s?\)\s?)?)?(?:\;)?/gmi)) {
      return LanguagesEnum.JAVASCRIPT;

      // ANY OF THE OTHERS MATCHED
    } else { // not 100% secure what it is, so let's return JS (almost impossible that this condition will go on)
      this.displayNotSureMessage();
      return LanguagesEnum.JAVASCRIPT;
    }
  }

  private displayNotSureMessage(): void {
    this.snackbarDisplayerService.openSnackBar(
      'We are not fully sure about the language, please review it manually', SnackbarTypeEnum.warning);
  }
}
