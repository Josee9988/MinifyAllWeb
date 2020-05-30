import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Changelog route \'/changelog\' route', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/changelog');
  });

  it('should have the expected h1 tag', () => {
    expect(page.getElementTextByTagName('app-root app-changelog h1')).toEqual('Change Log 📜📝');
  });

  it('should have the description of the purpose of the changelog', () => {
    expect(page.getElementTextByTagName('app-root app-changelog p:nth-child(2)')).toEqual('All notable changes to the "MinifyAll online" tool will be documented in this file.');
    expect(page.getElementTextByTagName('app-root app-changelog p:nth-child(3)')).toEqual('The format is based on Keep a Changelog and this project adheres to Semantic Versioning.');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
