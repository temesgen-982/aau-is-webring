# AAU Information Systems Webring

A webring for Addis Ababa University Information Systems students and alumni. Connects personal websites, blogs, portfolios, and projects.

## How it works

1. **Join** — Click "+ Join the Ring" and submit your name and website URL via the Formspree form.
2. **Get Listed** — Your entry gets added to `webring.json`.
3. **Explore** — The directory on the homepage lists all members.

## Adding a member

Edit `webring.json` and add an entry:

```json
{
  "name": "Your Name",
  "year": "2026",
  "url": "https://yoursite.com"
}
```

Then submit a PR, or use the form on the site.

## Embed widget

Members can add this snippet to their own site to show prev/next navigation:

```html
<div id="aau-is-webring"></div>
<script src="https://temesgen-982.github.io/aau-is-2026-webring/embed.js"></script>
```

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Directory page |
| `webring.json` | Member list (name, year, url) |
| `embed.js` | Embeddable prev/next widget |
| `design.png` | Design mockup |