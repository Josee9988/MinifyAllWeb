import {Component, OnInit} from '@angular/core';
import {ILanguagesInterface} from './ILanguages.interface';
import {Forms} from '../../../shared/classes/Forms.class';
import {SnackbarDisplayerService} from '../../../shared/services/Snackbar-displayer.service';
import {SnackbarTypeEnum} from '../../../shared/enums/Snackbar-type.enum';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent extends Forms implements OnInit {
  languageSelected = 0;
  nonMinifiedCode: FormControl;
  languages: ILanguagesInterface[] = [
    {value: 0, viewValue: 'Auto detect'},
    {value: 1, viewValue: 'CSS'},
    {value: 2, viewValue: 'HTML'},
    {value: 3, viewValue: 'JSON'},
  ];

  constructor(private snackbarDisplayerService: SnackbarDisplayerService) {
    super();
  }

  ngOnInit() {
    this.nonMinifiedCode = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]);
  }

  onSubmit() {
    if (this.validateInputs()) { // inputs are OK

    } else { // error while validating
      this.snackbarDisplayerService.openSnackBar('Error while validating fields.', SnackbarTypeEnum.warning);
    }
  }
}
