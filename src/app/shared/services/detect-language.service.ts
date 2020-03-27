import {Injectable} from '@angular/core';
import {LanguagesEnum} from '../enums/Languages.enum';

@Injectable({
  providedIn: 'root'
})
/**
 * Class that detects with the given text if the code source is CSS/HTML/JSON
 */
export class DetectLanguageService {

  /**
   * Summary: receives a code and guesses the programming language that it is written in.
   * @param source the programming code to analyze.
   */
  detectLanguage(source: string): LanguagesEnum {
    if (source.match(/<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/) || source.match(/<(?:br|p)[^>{]*>|<\w+\s*>/gmi)) {
      return LanguagesEnum.HTML; // HTML
    } else if (source.match(/{?(?<key>.*?):(?<val>["].*["]?|.*?)[,\W]\}/g) ||
      source.match(/(?:\s*\S+\s*{[^}]*})+/)) {
      return LanguagesEnum.JSON; // JSON
    } else if (source.match(
      /((?:^\s*)([\w#.@*,:\-.:>,*\s]+)\s*{(?:[\s]*)((?:[A-Za-z\- \s]+[:]\s*['"0-9\w .,\/()\-!%]+;?)*)*\s*}(?:\s*))/)) {
      return LanguagesEnum.CSS; // CSS
    } else {
      return LanguagesEnum.JAVASCRIPT; // JAVASCRIPT
    }
  }
}
