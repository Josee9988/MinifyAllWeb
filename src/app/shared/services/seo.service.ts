import {Injectable} from '@angular/core';
import {Meta} from "@angular/platform-browser";
import {environment} from "../../../environments/environment";
import {GenerateSeoTagConfig} from "../interfaces/generate-seo-tag-config";

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta) {
  }

  generateTags(config?: GenerateSeoTagConfig) {
    config = { // load the config
      title: 'MinifyAllWeb minify CSS, JSON and JS - minifyall.jgracia.es',
      description: 'Online code minifier for CSS, JSON, JSONC and JavaScript. Minify instantly your programming code simple, smooth and fast!',
      slug: '',
      ...config
    };

    // update the tags with the current values
    this.meta.updateTag({name: 'twitter:title', content: config.title});
    this.meta.updateTag({name: 'twitter:description', content: config.description});
    this.meta.updateTag({property: 'og:title', content: config.title});
    this.meta.updateTag({property: 'og:description', content: config.description});
    this.meta.updateTag({property: 'og:url', content: environment.url + config.slug});
  }
}

