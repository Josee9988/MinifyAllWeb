import {SanitizeHtmlPipe} from './sanitize-html.pipe';
import {async, TestBed} from "@angular/core/testing";
import {DomSanitizer} from "@angular/platform-browser";

beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [SanitizeHtmlPipe],
    providers: [SanitizeHtmlPipe, {provide: DomSanitizer}],
  });
}));

describe('SanitizeHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = TestBed.inject(SanitizeHtmlPipe);
    expect(pipe).toBeTruthy();
  });
});
