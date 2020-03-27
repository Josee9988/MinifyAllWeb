import {Injectable} from '@angular/core';
import {SnackbarDisplayerService} from './snackbar-displayer.service';
import {SnackbarTypeEnum} from '../enums/Snackbar-type.enum';

@Injectable({
  providedIn: 'root'
})
/**
 * Class that has the functions to copy to clipboard a text.
 * @author Jose Gracia Berenguer <jgracia9988@gmail.com>
 */
export class CopyClipboardService {

  constructor(private snackbarDisplayerService: SnackbarDisplayerService) {
  }

  /**
   * Summary: receives an element to be copied and copies it to the user clipboard.
   * If the process is successful it will return true otherwise false.
   *
   * @param toCopy the string to be copied to clipboard.
   * @param languageName the name of the type of element to be copied.
   */
  copyToClipboard(toCopy: string, languageName: string): boolean {
    const textarea = document.createElement('textarea');
    textarea.style.height = '0px';
    textarea.style.width = '0px';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.value = toCopy;
    textarea.select();
    const successful = document.execCommand('copy');
    if (textarea && textarea.parentNode) { // remove the element
      textarea.parentNode.removeChild(textarea);
    }
    if (successful) {
      this.snackbarDisplayerService.openSnackBar(
        languageName.toLocaleUpperCase() + 'code copied to the clipboard', SnackbarTypeEnum.success);
      return true;
    }
    this.snackbarDisplayerService.openSnackBar('No se pudo copiar al portapapeles, actualiza tu navegador.', SnackbarTypeEnum.warning);
    return false;
  }
}
