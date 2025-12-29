# Leonie Coaching Website

Source for the psychological coaching website of Leonie Wittkamp. The site is a clean, responsive, static experience built with Jekyll layouts and plain HTML/CSS/JS.

## Features

- Shared layout with header/footer via Jekyll front matter
- Extensionless URLs via per-page `permalink`
- Responsive layout and lightweight assets
- Smooth navigation with Speculation Rules and View Transitions (progressive enhancement)
- Contact form via Formspree

## Tech Stack

- Jekyll (GitHub Pages compatible)
- HTML5, CSS3, JavaScript
- Formspree

## Project Structure

```text
/
├── _layouts/
│   └── default.html
├── index.html
├── systemisches-coaching.html
├── dein-coachingprozess.html
├── ueber-mich.html
├── kontakt.html
├── datenschutz.html
├── impressum.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── nav-prefetch.js
│   │   └── copy.js
│   └── img/
├── Gemfile
└── README.md
```

## Local Development

1. `bundle install`
2. `bundle exec jekyll serve`
3. Open `http://localhost:4000`

## Deployment (GitHub Pages)

1. Settings -> Pages
2. Build and Deployment:
   - Branch: `main`
   - Folder: `/ (root)`
3. Save

Your site will appear at:
`https://YOUR-USERNAME.github.io/leonie-coaching-website/`

## Contact Form

Formspree endpoint:
`https://formspree.io/f/myzokjyw`

## License

All rights reserved Leonie Wittkamp and Vladino.
