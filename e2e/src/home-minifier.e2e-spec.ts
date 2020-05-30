import {AppPage} from './app.po';
import {browser, logging} from 'protractor';
import {environment} from "../../src/environments/environment";

describe('Home minifier \'/\' default route', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/');
  });

  it('should have the expected title', () => {
    expect(browser.getTitle()).toEqual('MinifyAll - ' + environment.domainUrl);
    expect(browser.getTitle()).toContain('minifyall.');
  });

  it('should have the expected canonical url tag', () => {
    expect(page.getElementAttributeByCss("link[rel='canonical']", 'href')).toContain(environment.production ? environment.url : 'localhost');
  });

  it('should display h1 tag with the name and the domain url', () => {
    const h1Tag = page.getElementTextByTagName('app-root app-home-component h1');
    expect(h1Tag).toEqual('MinifyAll - ' + environment.domainUrl);
    expect(h1Tag).toContain('minifyall.');
  });

  it('should display h2 tag with a brief description', () => {
    const h2Tag = page.getElementTextByTagName('app-root app-home-component h2');
    expect(h2Tag).toContain('tool');
    expect(h2Tag).toContain('MinifyAll');
    expect(h2Tag).toContain('to make it lighter');
    expect(h2Tag).toContain('minify your code');
  });

  it('should display main button with the expected text', () => {
    const minifyMainButton = page.getElementTextByTagName('app-root app-home-component .mat-raised-button');
    expect(minifyMainButton).toContain('Minify code');
    expect(minifyMainButton).not.toContain('select');
    expect(minifyMainButton).not.toContain('copy');
    expect(minifyMainButton).not.toContain('Select');
    expect(minifyMainButton).not.toContain('Copy');
    expect(minifyMainButton).not.toContain('text');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
