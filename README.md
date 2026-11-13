# Zhibo Duan — personal website

An academic website based on al-folio, with an introduction, publication previews and contact icons.

## Local preview

On this computer, run `../start-website.cmd` and open http://localhost:8080/ . Keep the command window open while previewing.

On another computer with Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve --config _config.yml,_config.local.yml --port 8080
```

## Editing

- `_pages/about.md`: biography, research interests and photo caption.
- `_bibliography/papers.bib`: all publications, sorted newest first by year and month.
- `_data/socials.yml`: email and GitHub profile.
- `assets/css/custom-site.css`: site-specific presentation.
- `assets/js/site-contact.js`: click the envelope to copy the email address.
- `docs/PERSONAL-SITE.md`: detailed editing notes.

## Checks

```sh
npm ci
npm run lint:prettier
node --check assets/js/site-contact.js
bundle exec jekyll build --config _config.yml,_config.local.yml
```

## Hosting

Production URL: https://bozhistudying233.github.io/ . The GitHub Actions workflow builds `_site` from `main` and deploys it with the official Pages artifact workflow. Set the repository Pages source to GitHub Actions. Local preview continues to use `_config.local.yml`.

The al-folio template attribution and MIT license are retained.
