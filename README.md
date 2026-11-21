# The Build Passed. The Hackers Don't Care.

A write-up of Sam Fernando's talk at **DDD Adelaide 2026** (21 November 2026), for everyone who missed it on the day.

**Read it:** https://samfernandoau.github.io/the-build-passed/

Fifteen comfortable lies engineering teams tell themselves about security, why they don't hold up, and what to do instead:

| # | The myth |
| --- | --- |
| 1 | "The build passed, so we're good." |
| 2 | "The scanner says we're clean." |
| 3 | "It's fine, it's a private repo." |
| 4 | "Popular packages and extensions are safe." |
| 5 | "The AI wrote it, so it's probably fine." |
| 6 | "Security slows us down." |
| 7 | "The cloud provider handles security." |
| 8 | "MFA means we're covered." |
| 9 | "It's behind the VPN, so it's internal." |
| 10 | "Nobody knows that endpoint exists." |
| 11 | "It's only a test environment." |
| 12 | "We're too small to be a target." |
| 13 | "We'll work it out if it happens." |
| 14 | "We had a clean pen test last year." |
| 15 | "We're ISO 27001 / SOC 2 certified." |

The practical takeaway is **[GovernanceLite](https://samfernandoau.github.io/GovernanceLite/)**, a mini governance framework for engineering teams where AI writes a lot of the code.

## About this repo

One static page (`index.html`), a stylesheet and a small navigation script (`assets/nav.js`). No build step, no frameworks, no web fonts, no trackers, and nothing loaded from other sites. The page works without JavaScript; the script only highlights where you are and tidies the menu. GitHub Pages serves the `main` branch as it is.

To preview locally:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Credits and licences

© 2026 Sam Fernando. All rights reserved for the talk content and the speaker photo.

Icons are from [Phosphor Icons](https://phosphoricons.com), MIT License, copyright (c) 2023 Phosphor Icons. See [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).

No web fonts are used; the site uses each visitor's system fonts.
