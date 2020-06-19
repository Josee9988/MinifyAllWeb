import {AppPage} from './app.po';
import {browser, by, element, logging} from 'protractor';
import {environment} from '../../src/environments/environment';

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
    expect(page.getElementAttributeByCss('link[rel=\'canonical\']', 'href')).toContain(
      environment.production ? environment.url : 'localhost');
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

  it('should display h3 tag with the right name', () => {
    const h3Tag = page.getElementTextByTagName('app-root app-home-component app-description #main-description h3');
    expect(h3Tag).toEqual('What is MinifyAll?');
  });

  it('should display the page description', () => {
    const wholeDescription = page.getElementTextByTagName('app-root app-home-component app-description');
    expect(wholeDescription).toContain('MinifyAllWeb');
    expect(wholeDescription).toContain('VSCode');
    expect(wholeDescription).toContain('terminal');
    expect(wholeDescription).toContain('package');
    expect(wholeDescription).toContain('@Josee9988');
    expect(wholeDescription).toContain('jgracia');
    expect(wholeDescription).toContain('CSS');
    expect(wholeDescription).toContain('HTML');
    expect(wholeDescription).toContain('JSON');
    expect(wholeDescription).toContain('JSON-C');
    expect(wholeDescription).toContain('open source');
    expect(wholeDescription).toContain('regex');
    expect(wholeDescription).toContain('TypeScript');
    expect(wholeDescription).toContain('Terser');
    expect(wholeDescription).toContain('buy me a coffee');
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

  it('should minify as expected with color minimization disabled', () => {
    // tslint:disable-next-line:max-line-length
    const codeToBeMinified = '.myClass {\nbackground-color: rgba(12, 12, 12, 0.8);\nbackground-color: rgb(12, 12, 12);\nbackground-color: #FAFAFA;\n/*other comment*/\ncontent: url("https://github.com/Josee9988/MinifyAll");\nmargin-right: 0px;\n}/* my comment\n*/';
    // tslint:disable-next-line:max-line-length
    const codeMinifiedHexDisabled = '.myClass{background-color:rgba(12,12,12,.8);background-color:rgb(12,12,12);background-color:#FAFAFA;content:url("https://github.com/Josee9988/MinifyAll");margin-right:0;}';

    const initialCode = browser.findElement(by.id('initialCode'));
    initialCode.sendKeys(codeToBeMinified);
    browser.actions().mouseMove(element(by.id('submitButton'))).click().perform();
    const codeResult = browser.findElement(by.id('codeResult')).getAttribute('value');
    const initialCode2 = browser.findElement(by.id('initialCode')).getAttribute('value');

    expect(initialCode2).toEqual(codeToBeMinified);
    expect(codeResult).toEqual(codeMinifiedHexDisabled);
  });

  it('should minify as expected with color minimization enabled', () => {
    // tslint:disable-next-line:max-line-length
    const codeToBeMinified = '.myClass {\nbackground-color: rgba(12, 12, 12, 0.8);\nbackground-color: rgb(12, 12, 12);\nbackground-color: #FAFAFA;\n/*other comment*/\ncontent: url("https://github.com/Josee9988/MinifyAll");\nmargin-right: 0px;\n}/* my comment\n*/';
    // tslint:disable-next-line:max-line-length
    const codeMinifiedHexEnabled = '.myClass{background-color:#0C0C0CCC;background-color:#111;background-color:#FFF;content:url("https://github.com/Josee9988/MinifyAll");margin-right:0;}';

    const initialCode = browser.findElement(by.id('initialCode'));
    initialCode.sendKeys(codeToBeMinified);

    browser.actions().mouseMove(element(by.id('mat-slide-toggle-1'))).click().perform();
    browser.actions().mouseMove(element(by.id('submitButton'))).click().perform();

    const codeResultHexEnabled = browser.findElement(by.id('codeResult')).getAttribute('value');
    expect(codeResultHexEnabled).toEqual(codeMinifiedHexEnabled);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
