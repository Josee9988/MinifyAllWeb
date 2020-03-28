import { Component, OnInit } from '@angular/core';
import {MarkdownParserService} from '../../shared/services/markdown-parser.service';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss']
})
export class ChangelogComponent implements OnInit {
  convertedText: string;

  constructor(private markdownParserService: MarkdownParserService) {
  }

  ngOnInit() {
    this.markdownParserService.getChangelog().subscribe(Markdown => {
      this.convertedText = this.markdownParserService.markdownToHtml(Markdown);
    });
  }
}
