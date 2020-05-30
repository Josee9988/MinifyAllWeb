import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Changelog route \'/info\' route', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/info');
  });

  it('should have the expected h1 tag', () => {
    expect(page.getElementTextByTagName('app-root app-information h1')).toEqual('MinifyAll online');
  });

  it('should have the a little description of the package', () => {
    expect(page.getElementTextByTagName('app-root app-information p:nth-child(2)')).toEqual('An online tool to minify your web code, you will love its simplicity!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
