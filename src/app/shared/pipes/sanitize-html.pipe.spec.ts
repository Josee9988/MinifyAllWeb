import {SanitizeHtmlPipe} from './sanitize-html.pipe';
import {async, TestBed} from '@angular/core/testing';
import {DomSanitizer} from '@angular/platform-browser';

describe('SanitizeHtmlPipe', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SanitizeHtmlPipe],
      providers: [SanitizeHtmlPipe, {provide: DomSanitizer}],
    });
  }));

  it('creates an instance', () => {
    const pipe = TestBed.inject(SanitizeHtmlPipe);
    expect(pipe).toBeTruthy();
  });
});
