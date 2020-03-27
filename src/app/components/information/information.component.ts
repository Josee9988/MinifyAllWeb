import {Component, OnInit} from '@angular/core';
import {MarkdownParserService} from '../../shared/services/markdown-parser.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  constructor(private markdownParserService: MarkdownParserService) {
  }

  ngOnInit() {
    this.markdownParserService.getMarkdown().subscribe(Markdown => {
      this.markdownParserService.markdownToHtml(Markdown);
    });
  }

}
