import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
  languages: any = [
    {value: '0', viewValue: 'Auto detect'},
    {value: '1', viewValue: 'CSS'},
    {value: '2', viewValue: 'HTML'},
    {value: '3', viewValue: 'JSON'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
