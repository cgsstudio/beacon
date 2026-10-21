# Beacon Health — static HTML export

This folder is a static export of the public WordPress site at `https://bagheeraventures.com/beacon/` captured on 21 October 2026. It contains **15 HTML pages** and the original page stylesheets, scripts, fonts, SVG logo, and images downloaded from the site. The exported pages retain the original WordPress/Elementor markup and styles rather than approximating them, so visual details remain as close as a static copy can get.

## Run locally

From this folder, run:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000/>. The main page is `index.html`; other pages are in their own folders, for example `about-us/index.html` and `products/index.html`. Internal site links have been changed to local routes.

## Brand styles retained from the source

The exported Elementor stylesheets are kept verbatim, including responsive rules and per-page overrides. The site's global style kit defines primary blue `#0956A4`, secondary green `#38B44F`, text `#000000`, and pale-blue accent `#EAF6FE`; headings use Manrope, body text Poppins (18px/26px desktop, 16px/22px on smaller screens), and accent styles use Roboto. Global heading sizes use responsive `clamp()` values, with individual page/widget overrides retained in the original CSS.

## Notes

- The original CSS and JavaScript are under `assets/o/`; those are the WordPress/Elementor assets used by the source pages. The downloaded Google font CSS/font files are included there as well.
- `assets/static-site.js` only intercepts the contact form because a WordPress AJAX endpoint cannot run in a static export. It opens the visitor's email application addressed to the email shown on the source contact page (`Abc@gmail.com`). Connect the form to your chosen form service/backend before using it in production.
- The Google Maps iframe and WhatsApp links remain external integrations; they need an internet connection. WordPress-only functions such as translation widgets and backend form delivery are not self-hosted by a static export. One original upload (`461287916_941875547968068_3349325855493415669_n.jpg`) returned 404 during export, so that single image reference is left unchanged rather than replaced with a guess. Three other stale partner-logo URLs were matched to their currently published WordPress media assets.
- This is a snapshot of the live site, so re-export if you want changes published on WordPress to appear here.
