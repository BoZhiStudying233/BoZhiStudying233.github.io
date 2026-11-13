# Personal site maintenance

This is Zhibo Duan's own site created from al-folio, not the upstream template library.

- Read `README.md` and `docs/PERSONAL-SITE.md` for this site's structure and accepted behavior.
- Runtime layouts, Sass and theme JavaScript come from the pinned `al_folio_core` gem. Prefer config/content changes and `assets/css/custom-site.css`; do not edit vendored gems.
- Keep plugin declarations in `Gemfile` and `_config.yml` consistent. Retain only features the site uses.
- Both home and Publications show all papers, newest first. Preserve Bib, PDF and Website buttons. Do not add contribution annotations.
- Preserve the supplied profile photo, paper images, identity, email and GitHub links. Do not invent personal or publication facts.
- The envelope copies the email directly, with a brief status message. Do not add dialogs or extra mail actions.
- Check formatting, JavaScript syntax and a full Jekyll build. For visual changes, inspect the actual browser. No lint or test requirement from the upstream library's deleted integration harness applies here.
- Never push to the upstream template repository. The user has authorized deployment to `BoZhiStudying233/bozhistudying233.github.io`; use its `main` branch and the GitHub Pages workflow.
