import {Injectable, NgZone} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {SnackbarTypeEnum} from '../enums/Snackbar-type.enum';

@Injectable({
  providedIn: 'root'
})
export class SnackbarDisplayerService {

  constructor(public snackBar: MatSnackBar, private zone: NgZone) {
  }

  /**
   * Summary: openSnackBar injects an element of type 'SnackBar' at the bottom of the page
   * with a main message and an action type (error, success, information ...) with a color
   * highlighted, and you can specify a duration in milliseconds.
   *
   * @param message main message of the snackbar.
   * @param action type of snackbar / alert shown to the user, commonly (Error / Success / Information).
   * @param duration duration in milliseconds of the snackbar if it is not closed by the use
   */
  public openSnackBar(message: string, action: SnackbarTypeEnum, duration: number = 4000): void {
    const receivedClass = this.getConfigStyleClass(action);
    const config = new MatSnackBarConfig();
    config.panelClass = [receivedClass];
    this.zone.run(() => {
      this.snackBar.open(message, action, {duration, panelClass: config.panelClass});
    });
  }

  /**
   * Summary: getConfigStyleClass depending on the type of SnackBarErrorType, returns the
   * respective css class associated with said SnackBarErrorType.
   *
   * @param action the type of action to apply.
   * @return string with the css key to be used.
   */
  private getConfigStyleClass(action: SnackbarTypeEnum): string {
    switch (action) {
      case SnackbarTypeEnum.error:
        return 'snackbar-error';
      case SnackbarTypeEnum.informational:
        return 'snackbar-info';
      case SnackbarTypeEnum.warning:
        return 'snackbar-warning';
      case SnackbarTypeEnum.success:
        return 'snackbar-success';
      default:
        return 'snackbar-info';
    }
  }
}
