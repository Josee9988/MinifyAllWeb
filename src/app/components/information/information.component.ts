import {Component, OnInit} from '@angular/core';
import {MarkdownParserService} from '../../shared/services/markdown-parser.service';
import {LocalFilesService} from '../../shared/services/local-files.service';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  convertedText: string;

  constructor(
    private markdownParserService: MarkdownParserService,
    private localFilesService: LocalFilesService,
    private title: Title,
    private meta: Meta) {
  }

  ngOnInit() {
    this.localFilesService.getReadme().subscribe(Markdown => {
      this.convertedText = this.markdownParserService.markdownToHtml(Markdown);
    });
    this.title.setTitle('MinifyAll changelog');
    this.meta.updateTag({name: 'Changelog page of MinifyAll displaying the CHANGELOG.md file from the repository.'})
  }
}
