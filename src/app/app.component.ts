import {Component, OnInit} from '@angular/core';
import {CanonicalService} from "./shared/services/canonical.service";
import {SeoService} from "./shared/services/seo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private canonicalService: CanonicalService, private seo: SeoService) {
  }

  ngOnInit(): void {
    this.canonicalService.setCanonicalURL();
    this.seo.generateTags();
  }
}
