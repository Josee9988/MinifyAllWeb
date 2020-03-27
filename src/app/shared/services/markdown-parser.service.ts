import {Injectable} from '@angular/core';
import * as marked from 'marked';
import {HttpClient} from '@angular/common/http';
import {retry, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * Obtains the readme text and parses it to HTML.
 */
export class MarkdownParserService {

  constructor(private http: HttpClient) {
  }

  /**
   * Summary: we obtain the markdown of the project README.md.
   */
  getMarkdown(): Observable<string> {
    // @ts-ignore
    return this.http.get<string>('README.md', {responseType: 'text'})
      .pipe(tap(), retry(2));
  }

  /**
   * Summary: converts markdown to HTML.
   * @param givenMarkdown the markdown that we want to convert as a string.
   */
  markdownToHtml(givenMarkdown: string): string {
    return marked.parse(givenMarkdown, {gfm: true, breaks: true});
  }
}
