# Speaking n8n

**Speak with Confidence — One Learner. One Subject. Every Kind of Room.**

A public-speaking learning project built around hands-on n8n practice.

## Course method

**Speak → Build → Speak Again**

The site presents a 35-lesson, 6-stage learning journey. All lessons are currently marked `coming-soon` in `content/course.ts`. As lessons are published, change a lesson status to `available` and add its lesson route.

## Project structure

- `app/page.tsx` — homepage and major sections
- `app/globals.css` — visual system and responsive styling
- `components/course-journey.tsx` — stage and lesson presentation
- `content/course.ts` — course stages, lessons, final talks, and ecosystem links
- `.github/workflows/deploy-pages.yml` — GitHub Pages deployment
- `CNAME` — `speakingn8n.detleng.com`

## Local development

```bash
npm ci
npm run dev
```

## Static production build

```bash
npm run build:pages
```

The Next.js configuration uses static export and writes the site to `out/`.

## Deployment

Push to `main`. The included GitHub Actions workflow builds the static site and deploys it to GitHub Pages.

## Independent project

Speaking n8n is an independent learning project and is not affiliated with or endorsed by n8n GmbH.
