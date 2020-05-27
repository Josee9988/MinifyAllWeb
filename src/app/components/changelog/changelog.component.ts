import {Component, OnInit} from '@angular/core';
import {MarkdownParserService} from '../../shared/services/markdown-parser.service';
import {LocalFilesService} from '../../shared/services/local-files.service';
import {SeoService} from "../../shared/services/seo.service";

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
    private seo: SeoService) {
  }

  ngOnInit() {
    this.localFilesService.getChangelog().subscribe(Markdown => {
      this.convertedText = this.markdownParserService.markdownToHtml(Markdown);
    });
    this.seo.generateTags({
      title: 'MinifyAll changelog - minifyall.jgracia.es',
      description: 'Changelog page of MinifyAll displaying the CHANGELOG.md file from the Github repository.',
      slug: 'info'
    });
  }
}
