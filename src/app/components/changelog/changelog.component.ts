import {Component, OnInit} from '@angular/core';
import {MarkdownParserService} from '../../shared/services/markdown-parser.service';
import {LocalFilesService} from '../../shared/services/local-files.service';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss']
})
export class ChangelogComponent implements OnInit {
  convertedText: string;

  constructor(
    private markdownParserService: MarkdownParserService,
    private localFilesService: LocalFilesService,
    private title: Title,
    private meta: Meta) {
  }

  ngOnInit() {
    this.title.setTitle('MinifyAll changelog');
    this.meta.updateTag({name: 'Online code minifier for CSS, JSON, JSONC and JavaScript. Minify instantly your programming code simple, smooth and fast!'})
    this.localFilesService.getChangelog().subscribe(Markdown => {
      this.convertedText = this.markdownParserService.markdownToHtml(Markdown);
    });
  }
}
