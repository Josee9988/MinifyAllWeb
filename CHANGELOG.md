# **Change Log** 📜📝

All notable changes to the "**MinifyAll online**" tool will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [**1.4.0**] - 2020-05-28

### Added

* App using Firebase hosting to use angular universal SSR to improve app render performance.
* "a" tags with title.
* Canonical link on page refresh.
* SEOService to update meta tags on every route.
* Config for the routes to scroll back on top smoothly.

### Changed

* Some meta tags in the index.html file.

## [**1.3.2**] - 2020-05-23

### Added

* Meta preconnect tag to Fontawesome, fonts.gstatic and google analytics.
* Added angular SSR (not in use yet but it is prepared).
* Ngcc postinstall.

## [**1.3.1**] - 2020-05-22

### Added

* Canonical link
* Bootstrap used style file with the minified bootstrap but only with the used classes and styles.
* Folder with all the style files.

### Removed

* Bootstrap CDN.

### Fixed

* Meta tag "og:image" link.

## [**1.3.0**] - 2020-05-22

### Added

* Support for PWA's.
* All the routes to the sitemap.xml.
* Angular lazy loading.
* Angular preload.
* Meta tag for caching the data by 7 days.
* Noscript tag in the index.html to warn the user if he doesn't have JS enabled.

### Changed

* From home-component to home-minifier.
* Bumped from Angular 8 to Angular 9.

### Fixed

* Accessibility problems.
* Mobile navigation, wrong padding left (now set to 5px).

### Removed

* Robots txt now allows all the routes.

## [**1.2.2**] - 2020-05-18

### Added

* Some minnor SEO improvements such as each page using a specific title and meta description.

### Changed

* logo.png to logo.webp.

## [**1.2.1**] - 2020-05-18

### Changed

* Version of MinifyAll core to 1.1.0.

## [**1.2.0**] - 2020-05-16

### Added

* MinifyAll core instead of having the raw code inside the services folder.
* Buymeacoffee in the funding.yaml

### Changed

* Link to buy me a coffee from paypal to https://www.buymeacoffee.com/josee9988

### Removed

* Raw minifyall code from the services folder.

## [**1.1.8**] - 2020-04-17

### Added

* Support for SPA applications in Github Pages.

## [**1.1.7**] - 2020-04-12

### Added

* Meta tags to support twitter, facebook and more.
* General SEO improvements.

## [**1.1.6**] - 2020-04-10

### Fixed

* Problem with the HTML minimization that caused the tags to don't keep its space between others.

## [**1.1.5**] - 2020-04-10

### Added

* Support for HTML meta tags.

## [**1.1.4**] - 2020-04-02

### Added

* Meta tags to the index.html file.

## [**1.1.3**] - 2020-04-02

### Added

* "Buy me a coffee" link to a paypal.me site.

### Changed

* Version tag of the last version which was incorrect. (From 1.2.0 to 1.1.2)

## [**1.1.2**] - 2020-04-02

### Added

* Button to select all the text from the minified textarea.
* Event in both textareas that will be triggered with a  double click that will select all the text from the actual textarea.

## [**1.1.1**] - 2020-03-31

### Changed

* Location of the methods that obtain the local files using HTTP. Moved from markdownparser to local files.

## [**1.1.0**] - 2020-03-29

### Added

* Version number in the navbar.

[Published]

## [**1.0.0**] - 2020-03-28

### Added

* All the web
