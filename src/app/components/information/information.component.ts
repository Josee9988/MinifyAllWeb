import {Component, OnInit} from '@angular/core';
import {MarkdownParserService} from '../../shared/services/markdown-parser.service';
import {LocalFilesService} from '../../shared/services/local-files.service';
import {SeoService} from "../../shared/services/seo.service";

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
    private seo: SeoService) {
  }

  ngOnInit() {
    this.localFilesService.getReadme().subscribe(Markdown => {
      this.convertedText = this.markdownParserService.markdownToHtml(Markdown);
    });
    this.seo.generateTags({
      title: 'MinifyAll information - minifyall.jgracia.es',
      description: 'Informational page of MinifyAll displaying the README.md file from the Github repository.',
      slug: 'info'
    });
  }
}
