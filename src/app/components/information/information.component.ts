import {Component, OnInit} from '@angular/core';
import {MarkdownParserService} from '../../shared/services/markdown-parser.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  convertedText: string;

  constructor(private markdownParserService: MarkdownParserService) {
  }

  ngOnInit() {
    this.markdownParserService.getReadme().subscribe(Markdown => {
      this.convertedText = this.markdownParserService.markdownToHtml(Markdown);
    });
  }
}
