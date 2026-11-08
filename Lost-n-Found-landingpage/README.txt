THE LOST AND FOUND — CREATOR HUB
================================

A lightweight static site for GitHub + Cloudflare Pages. The root page is a placeholder creator directory; each creator has a self-contained folder.

STRUCTURE
---------
index.html                 Lost and Found home page
hub.css                    Root page styling
assets/LF-Badge.png        Lost and Found badge
favicon.ico and PNGs      Browser, mobile, and Apple touch icons
site.webmanifest          Installed-site icon metadata
Kaires/index.html          Kaires landing page
Kaires/styles.css          Kaires page styling
Kaires/script.js           Dice roll and randomized mannequin poses
Kaires/assets/             Kaires page images and icons
Kaires/assets/archive/     Older unused image exports retained for later use

ROUTES
------
/                          Lost and Found creator directory
/Kaires/                   Kaires landing page

The Kaires card links to the Kaires folder. The Lost and Found badge at the upper-left of the Kaires panel returns visitors to the root page. Add future creators as sibling folders (for example, /CreatorName/) and link to them from the root index.

PUBLISHING
----------
Upload the contents of this package to the repository root connected to Cloudflare Pages. Use the root directory as the project root with no build command and no output directory. Cloudflare Pages serves the root index and the Kaires/index.html page from /Kaires/.

KAIRES INTERACTIONS
-------------------
The direct social links open their accounts. Facebook is marked TBA. Clicking the numbered D20 rolls a result from 1 to 20 and updates the message. On wide screens, the supplied mannequin poses cycle independently on each side.
