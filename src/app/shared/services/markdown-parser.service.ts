import {Injectable} from '@angular/core';
import * as marked from 'marked';

@Injectable({
  providedIn: 'root'
})
/**
 * Obtains the function to parse from markdown language to HTML.
 */
export class MarkdownParserService {

  /**
   * Summary: converts markdown to HTML.
   * @param givenMarkdown the markdown that we want to convert as a string.
   */
  markdownToHtml(givenMarkdown: string): string {
    return marked.parse(givenMarkdown, {gfm: true, breaks: true});
  }
}
