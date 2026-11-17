<p align="center"><a href="https://cardio2.info"><img src="https://raw.githubusercontent.com/cardio2/brand-assets/main/logo.svg" alt="Cardio2" width="260"></a></p>

# cardio2-website

Source of the Cardio2 website, [cardio2.info](https://cardio2.info), in English, German, Spanish, French and Ukrainian.

Cardio2 is an AI companion for people recovering at home after a heart attack, a stent, heart surgery or a heart failure diagnosis. The website explains the product, how the AI and the safety rules work, and how hospitals, insurers and partners can take part. Cardio2 is in development and is not yet certified as a medical device.

## Technology

- Static HTML, CSS and plain JavaScript in a single page, with no build step and no framework
- Texts for each language in separate JavaScript files
- Fonts are served from this repository, so the site makes no requests to third parties
- No cookies, no analytics and no tracking. Only the chosen language and colour theme are remembered in the visitor's own browser (localStorage)
- The contact form sends nothing to a server: it prepares a message that the visitor sends from their own email app

## Structure

```
cardio2-website/
├── index.html        page layout, styles and scripts
├── founder.jpg       photo for the Team section
├── i18n/             texts for each language
│   ├── en.js         English
│   ├── de.js         German
│   ├── es.js         Spanish
│   ├── fr.js         French
│   └── uk.js         Ukrainian (shown as UA)
└── fonts/            Inter and Inter Tight, Latin and Cyrillic subsets (woff2)
```

All languages share the same `index.html`. The language switcher loads the texts from `i18n/`.

## View it locally

```bash
git clone https://github.com/cardio2/cardio2-website.git
cd cardio2-website
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## Report a problem

Found a typo, a translation error or a broken link? Open an issue with the page, the language and your browser, or send a small pull request. See [CONTRIBUTING](https://github.com/cardio2/.github/blob/main/CONTRIBUTING.md).

## Licence

© 2026 Cardio2. All rights reserved. See [LICENSE](LICENSE). The code, texts, images and logo may not be reused without written permission.

The fonts in `fonts/` (Inter and Inter Tight, by Rasmus Andersson and the Inter project authors) are licensed separately under the [SIL Open Font License 1.1](https://openfontlicense.org).

## Contact

[contact@cardio2.info](mailto:contact@cardio2.info) · [cardio2.info](https://cardio2.info) · [LinkedIn](https://www.linkedin.com/company/cardio2)
