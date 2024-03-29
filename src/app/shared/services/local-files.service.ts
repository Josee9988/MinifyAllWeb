import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
/**
 * Class that obtain the files that are stored alongside with the web to obtain some extra data.
 */
export class LocalFilesService {
  pageUrl: string;

  constructor(private http: HttpClient) {
    // use the absolute url only if the environment is set to production
    environment.production ? this.pageUrl = environment.url : this.pageUrl = '';
  }

  /**
   * Summary: we obtain the readme of the project README.md.
   */
  getReadme(): Observable<string> {
    // @ts-ignore
    return this.http.get<string>(this.pageUrl + 'README.md', {responseType: 'text'})
      .pipe(tap(), retry(2));
  }

  /**
   * Summary: we obtain the markdown of the project CHANGELOG.md.
   */
  getChangelog(): Observable<string> {
    // @ts-ignore
    return this.http.get<string>(this.pageUrl + 'CHANGELOG.md', {responseType: 'text'})
      .pipe(tap(), retry(2));
  }

  /**
   * Summary: we obtain the markdown of the project PACKAGE.json.
   */
  getPackage(): Observable<any> {
    return this.http.get<any>(this.pageUrl + 'package.json', {responseType: 'json'})
      .pipe(tap(), retry(2));
  }
}
