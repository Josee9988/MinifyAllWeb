import {Component} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {
  url = environment.url;
}
