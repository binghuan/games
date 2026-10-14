# Games

Studio Bing-Huan's game collection, with Traditional Chinese / English and light / dark themes.

Website: https://binghuan.github.io/games/

## Deployment

In the repository's **Settings → Pages**, select **GitHub Actions**.

The workflow in `.github/workflows/static.yml` publishes updates whenever changes
are pushed to `main`, and can also be run manually from the Actions tab.

## Content

`index.html` is the collection homepage. Styles live in `css/games.css`,
translations and interactions in `games.js`, and initial theme preferences in
`games-preferences.js`. Referenced covers, store badges, and the favicon are
included under `images/` and `icon/`.

The page and its assets were copied from `studio-binghuan-website/public/games.html`.
The original website is unchanged.

## Local preview

Open `index.html` in a browser, or run `python3 -m http.server 8000`
and visit http://localhost:8000.
