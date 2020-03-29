import {Injectable} from '@angular/core';
import * as marked from 'marked';
import {HttpClient} from '@angular/common/http';
import {retry, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * Obtains some files as a text or json and also includes the function to parse from markdown to HTML.
 */
export class MarkdownParserService {

  constructor(private http: HttpClient) {
  }

  /**
   * Summary: we obtain the readme of the project README.md.
   */
  getReadme(): Observable<string> {
    // @ts-ignore
    return this.http.get<string>('README.md', {responseType: 'text'})
      .pipe(tap(), retry(2));
  }

  /**
   * Summary: we obtain the markdown of the project CHANGELOG.md.
   */
  getChangelog(): Observable<string> {
    // @ts-ignore
    return this.http.get<string>('CHANGELOG.md', {responseType: 'text'})
      .pipe(tap(), retry(2));
  }

  /**
   * Summary: we obtain the markdown of the project PACKAGE.json.
   */
  getPackage(): Observable<string> {
    return this.http.get<string>('package.json', {responseType: 'json'})
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
