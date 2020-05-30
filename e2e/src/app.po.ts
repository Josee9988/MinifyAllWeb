import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo(path: string) {
    return browser.get(path) as Promise<any>;
  }

  getElementTextByTagName(tag: string) {
    return element(by.tagName(tag)).getText() as Promise<string>;
  }

  getElementAttributeByCss(css: string, attribute: string) {
    return element(by.css(css)).getAttribute(attribute) as Promise<string>;
  }

  getElementById(id: string) {
    return element(by.id(id)) as unknown as Promise<any>;
  }

  clickButton(id: string) {
    browser.actions().mouseMove(element(by.id(id))).click();
  }
}
