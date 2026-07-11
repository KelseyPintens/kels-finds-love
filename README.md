# Kelsey · Finds Love 💞

An earthy, modern single-page dating profile website. No build step, no
dependencies — just open it in a browser.

## Preview locally

Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Make it yours

Everything is plain HTML/CSS/JS and easy to edit.

| What to change            | Where |
| ------------------------- | ----- |
| Your intro, bio, sections | `index.html` |
| Colors, fonts, spacing    | the `:root` variables at the top of `css/styles.css` |
| Floating heart emojis     | the `emojis` array in `js/main.js` |

### Add your photos

1. Drop image files into an `images/` folder.
2. **Hero photo** — in `index.html`, replace the `.photo-placeholder` div with:
   ```html
   <img src="images/me.jpg" alt="Kelsey" />
   ```
3. **Gallery** — give each `.tile` a background image in `css/styles.css`, e.g.
   `.tile-a { background-image: url("../images/1.jpg"); background-size: cover; }`

### Update your contact link

The "Say hi" button uses a `mailto:` link. Search `index.html` for
`mailto:` and swap in your preferred email or a link to your socials.

## Publish it (free, via GitHub Pages)

1. Push this repo to GitHub.
2. Repo **Settings → Pages**.
3. Under **Build and deployment**, set **Source: Deploy from a branch**,
   branch **main**, folder **/ (root)**, and save.
4. Your site goes live at `https://<username>.github.io/kels-finds-love/`.

---

Made with 💞 in Nashville.
