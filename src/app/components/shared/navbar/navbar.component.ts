import {Component, OnInit} from '@angular/core';
import {INavbarLinks} from './INavbarLinks.interface';
import {map, shareReplay} from 'rxjs/operators';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {MarkdownParserService} from '../../../shared/services/markdown-parser.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarLinks: Array<INavbarLinks>;
  appName: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(
    '(max-width: 859.99px) and (orientation: portrait), ' +
    '(max-width: 959.99px) and (orientation: landscape)')
    .pipe(map(result => result.matches), shareReplay());

  constructor(private breakpointObserver: BreakpointObserver, private markdownParserService: MarkdownParserService) {
  }

  ngOnInit() {
    this.markdownParserService.getPackage().subscribe(Response => {
      this.appName = 'MinifyAll v' + Response.version;
    });
    this.declareNavbarElements();
  }

  /**
   * Summary: creates the navbarlinks to be shown at the navbar.
   */
  declareNavbarElements(): void {
    this.navbarLinks = [ // add the missing ones in the right order
      {icon: 'fas fa-compress-alt', field: 'Minify code', route: 'home', order: 1},
      {icon: 'fas fa-info-circle', field: 'Information', route: 'info', order: 2},
      {icon: 'fas fa-clipboard-list', field: 'Changelog', route: 'changelog', order: 3},
      {icon: 'fab fa-github', field: 'GitHub repo', route: '', order: 4, externalLink: 'https://github.com/Josee9988/MinifyAllWeb'},
      ];
  }
}
