import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class CanonicalService {

  constructor(@Inject(DOCUMENT) private dom) {
  }

  setCanonicalURL(url?: string): void {
    const canURL = url === undefined ? this.dom.URL : url;
    // only if it is not a firebase url
    if (!canURL.includes('cloud') || !canURL.includes('functions') || !canURL.includes('us-central')) {
      const link: HTMLLinkElement = this.dom.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.dom.head.appendChild(link);
      link.setAttribute('href', canURL);
    }
  }

}
