import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CanonicalService} from "./shared/services/canonical.service";
import {SeoService} from "./shared/services/seo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  /**
   * https://medium.com/swlh/how-to-host-your-angular-reactjs-vuejs-spa-on-github-pages-2d9ab102ac7b
   * HACK TO ALLOW TO USE SPA IN GITHUB PAGES
   * TODO: if purchasing a server remove this
   */
  constructor(private router: Router, private canonicalService: CanonicalService, private seo: SeoService) {
    const path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      this.router.navigate([path]);
    }
  }

  ngOnInit(): void {
    this.canonicalService.setCanonicalURL();
    this.seo.generateTags();
  }
}
