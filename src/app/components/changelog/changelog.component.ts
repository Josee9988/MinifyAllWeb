import { Component, OnInit } from '@angular/core';
import {MarkdownParserService} from '../../shared/services/markdown-parser.service';
import {LocalFilesService} from '../../shared/services/local-files.service';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss']
})
export class ChangelogComponent implements OnInit {
  convertedText: string;

  constructor(private markdownParserService: MarkdownParserService, private localFilesService: LocalFilesService) {
  }

  ngOnInit() {
    this.localFilesService.getChangelog().subscribe(Markdown => {
      this.convertedText = this.markdownParserService.markdownToHtml(Markdown);
    });
  }
}
