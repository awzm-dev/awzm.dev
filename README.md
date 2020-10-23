# <img src="./blog/.vuepress/public/awzm.gif" width="35"> AWZM.DEV

<!-- PROJECT SHIELDS -->
<!--
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
*** See bottom of page for list of reference links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![David Dependencies Status][dependencies-shield]][dependencies-url]
[![License: MIT][license-shield]][license-url]
[![Twitter: awzm][twitter-shield]][twitter-url]

Static frontend to the awzm.dev blog

[Check it out »][product-url]

[Report Bug][issues-url] • [Request Feature][issues-url]

## About The Project

Fetches content from the [backend CMS][cms-url] and builds a static site with Vuepress

## ☕️ Getting Started

### Install dependencies

```sh
yarn install
```

### Fetching content from backend CMS

```sh
yarn fetch:posts
```

### Running the dev server

```sh
yarn dev
```

### Deploying to production

To deploy a new version of the site, simply open a pull request. Once merged, it will be deployed automatically.

### Writing Content

Visit the [headless CMS][cms-url] to write new content. Make sure to set the "status" to "published" when it's ready to publish and it will be automatically deployed to the site.

## 🤝 Contributing

Want to make a change? Any contributions you make are **greatly appreciated**.

Check out the [issues page][issues-url]

## 🗺 Roadmap

See the [open issues][issues-url] for a list of proposed features (and known issues)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[url]: https://awzm.dev
[github-url]: https://github.com/awzm-dev
[contributors-shield]: https://img.shields.io/github/contributors/awzm-dev/awzm.dev.svg?style=flat-square
[contributors-url]: https://github.com/awzm-dev/awzm.dev/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/awzm-dev/awzm.dev.svg?style=flat-square
[issues-url]: https://github.com/awzm-dev/awzm.dev/issues
[dependencies-shield]: https://david-dm.org/awzm-dev/awzm.dev.svg
[dependencies-url]: https://david-dm.org/awzm-dev/awzm.dev
[product-url]: https://awzm.dev
[license-shield]: https://img.shields.io/badge/License-MIT-yellow.svg
[license-url]: https://opensource.org/licenses/MIT
[twitter-shield]: https://img.shields.io/twitter/follow/HoukasaurusRex.svg?style=social
[twitter-url]: https://twitter.com/HoukasaurusRex
[cms-url]: https://working-title-dev-blog.herokuapp.com/admin