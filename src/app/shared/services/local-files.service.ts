import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
/**
 * Class that obtain the files that are stored alongside with the web to obtain some extra data.
 */
export class LocalFilesService {

  constructor(private http: HttpClient) {
  }

  /**
   * Summary: we obtain the readme of the project README.md.
   */
  getReadme(): Observable<string> {
    // @ts-ignore
    return this.http.get<string>(environment.url + 'README.md', {responseType: 'text'})
      .pipe(tap(), retry(2));
  }

  /**
   * Summary: we obtain the markdown of the project CHANGELOG.md.
   */
  getChangelog(): Observable<string> {
    // @ts-ignore
    return this.http.get<string>(environment.url + 'CHANGELOG.md', {responseType: 'text'})
      .pipe(tap(), retry(2));
  }

  /**
   * Summary: we obtain the markdown of the project PACKAGE.json.
   */
  getPackage(): Observable<any> {
    return this.http.get<any>(environment.url + 'package.json', {responseType: 'json'})
      .pipe(tap(), retry(2));
  }
}
