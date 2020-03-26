import { Component, OnInit } from '@angular/core';
import {ILanguagesInterface} from './ILanguages.interface';
import {Forms} from '../../../shared/classes/Forms.class';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent extends Forms implements OnInit {
  languageSelected = 0;
  languages: ILanguagesInterface[] = [
    {value: 0, viewValue: 'Auto detect'},
    {value: 1, viewValue: 'CSS'},
    {value: 2, viewValue: 'HTML'},
    {value: 3, viewValue: 'JSON'},
  ];

  constructor() {
    super();
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.validateInputs())
  }
}
