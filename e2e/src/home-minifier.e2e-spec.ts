import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import {environment} from "../../src/environments/environment";

describe('Home minifier \'/\' default route', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display h1 tag with the name and the domain url', () => {
    page.navigateTo();
    expect(page.getH1TitleText()).toEqual('MinifyAll - '+environment.domainUrl);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
