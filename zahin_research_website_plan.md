# Research Website Build Plan for Khondaker Zahin Fuad

## 1. Goal

Build a clean, lightweight academic research website that presents Zahin as an AI/CS PhD applicant and early-career researcher, not primarily as a digital marketing professional.

The website should help a potential PhD supervisor understand, within 15 seconds:

> Khondaker Zahin Fuad is an MSc CSE graduate specializing in Intelligent Systems, with research interests in Explainable AI, deep learning, energy forecasting, reinforcement learning, evolutionary optimization, and data-driven decision-support systems.

The site should connect the visitor to:

- Academic CV
- Google Scholar
- GitHub
- LinkedIn
- Publications
- Research repositories
- Contact email

---

## 2. Recommended Stack

### Preferred

Use **Astro**.

Why:

- Lightweight static site generator
- Good support for Markdown/MDX content
- Easy to deploy to GitHub Pages
- Suitable for academic portfolio sites
- Does not require a backend
- Easy for Codex to modify and maintain

### Alternative options

If Astro feels too much, use one of these:

- Plain HTML/CSS
- Eleventy
- Hugo
- Jekyll

But the recommended choice is still Astro because the site will likely grow with publications, project pages, and research notes.

---

## 3. Hosting and Domain Strategy

### Recommended repository

Create a GitHub repository named:

```text
zahinfuad.github.io
```

This will create the default GitHub Pages URL:

```text
https://zahinfuad.github.io
```

### Custom domain strategy

Eventually connect a custom domain such as:

```text
khondakerzahinfuad.com
```

or:

```text
zahinfuad.com
```

The GitHub Pages URL is acceptable at first, but a custom domain looks more professional for supervisor outreach.

### Astro config note

For a user/organization GitHub Pages site named `zahinfuad.github.io`, Astro usually does **not** need a `base` path.

Example:

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://zahinfuad.github.io'
});
```

If using a project repo instead, such as `research-site`, then `base: '/research-site'` may be needed.

---

## 4. Target Audience

The website should be designed for:

1. Potential PhD supervisors
2. Graduate admissions reviewers
3. Research collaborators
4. Academic peers
5. Recruiters for research/AI roles

The primary audience is **PhD supervisors**.

Design and writing should therefore be:

- Academic
- Concise
- Evidence-based
- Easy to scan
- Not flashy
- Not marketing-heavy

---

## 5. Core Positioning

### Primary identity

```text
AI/ML researcher focused on Explainable AI, forecasting, optimization, and resilient decision-support systems.
```

### Longer homepage intro

```text
I am an MSc Computer Science and Engineering graduate specializing in Intelligent Systems. My research interests include Explainable Artificial Intelligence, deep learning, energy forecasting, reinforcement learning, evolutionary optimization, and data-driven decision-support systems.

My work focuses on applied AI for real-world forecasting, optimization, and resilient decision-making, with applications in renewable energy, sustainable agriculture, and disaster-response logistics.
```

### Research theme

```text
Applied AI for forecasting, optimization, and resilient decision-support systems.
```

### Avoid leading with

- Digital Marketing Specialist
- SEO Expert
- Content Strategist
- Growth Marketer

Marketing experience should be included, but framed as industry experience in data-driven digital systems, analytics, system usability, and cross-functional collaboration.

---

## 6. Site Map

Recommended pages:

```text
/
/research/
/publications/
/projects/
/cv/
/experience/
/contact/
```

Optional later:

```text
/news/
/notes/
/teaching/
/service/
```

Do not add empty pages. Only add optional pages when there is real content.

---

## 7. Page-by-Page Plan

## 7.1 Home Page: `/`

Purpose: Give a fast, academic first impression.

Sections:

1. Hero
2. Short bio
3. Research interests
4. Featured publications
5. Featured projects
6. Recent news
7. Contact / links

### Hero content

```text
Khondaker Zahin Fuad

AI/ML Researcher | MSc CSE, Intelligent Systems
Explainable AI · Forecasting · Optimization · Decision-Support Systems
```

Buttons:

- CV
- Google Scholar
- GitHub
- LinkedIn
- Email

### Short bio

```text
I am an MSc Computer Science and Engineering graduate specializing in Intelligent Systems. My work focuses on applied AI for real-world forecasting, optimization, and resilient decision-making, including renewable energy forecasting, sustainable agriculture, and disaster-response logistics.
```

### Featured research interests

Show as compact chips/cards:

- Explainable AI
- Deep Learning
- Energy Forecasting
- Reinforcement Learning
- Evolutionary Optimization
- Data-Driven Decision Systems
- AI for Sustainability
- Resilient Infrastructure

### Featured publications

Show the top 3:

1. TCN-XAI: An Explainable Framework for Short-Term Wind Forecasting Using Dilated Temporal Convolutional Networks
2. AI-Based Fertilizer Optimization Using Random Forests and NSGA-II for Soybean Yield in Brazil
3. Reinforcement Learning-Based Self-Healing Logistics Databases for Zero-Downtime Disaster Response Operations

### Recent news examples

```text
2026 — MSc thesis on explainable deep learning for probabilistic multi-horizon solar forecasting.
2025 — Paper presented at IEEE STI 2025 on AI-based fertilizer optimization.
2025 — Paper presented at IEEE STI 2025 on reinforcement learning-based self-healing logistics databases.
2025 — Wind forecasting work presented at BIM 2025 and accepted as a Taylor & Francis book chapter.
```

---

## 7.2 Research Page: `/research/`

Purpose: Explain the research direction clearly.

Sections:

1. Research statement
2. Research areas
3. Current thesis
4. Future PhD interests

### Research statement

```text
My research focuses on applied artificial intelligence methods for forecasting, optimization, and resilient decision-support systems. I am particularly interested in interpretable models that can support high-stakes planning in energy, agriculture, logistics, and sustainability-focused domains.
```

### Research areas

#### Explainable Forecasting Systems

Focus:

- Temporal neural networks
- Deep learning for renewable energy forecasting
- XAI for model transparency
- Probabilistic and multi-horizon forecasting

Related work:

- MSc thesis on solar forecasting in Bangladesh
- Wind power forecasting with TCN and XAI

#### AI for Sustainable Optimization

Focus:

- Machine learning surrogate models
- Multi-objective optimization
- Evolutionary algorithms
- Agricultural decision-support systems

Related work:

- Fertilizer optimization using Random Forest and NSGA-II

#### Reinforcement Learning for Resilient Systems

Focus:

- RL-based system recovery
- Self-healing data systems
- Disaster-response logistics
- Zero-downtime decision-support infrastructure

Related work:

- RL-based self-healing logistics databases

### Future PhD interest paragraph

```text
For PhD study, I am interested in developing reliable and interpretable AI systems that combine forecasting, optimization, and adaptive decision-making. I am especially interested in research groups working on explainable AI, reinforcement learning, intelligent systems, sustainable AI applications, and resilient data-driven infrastructure.
```

---

## 7.3 Publications Page: `/publications/`

Purpose: Make publications easy to verify.

Each publication should include:

- Title
- Authors
- Venue
- Year
- Status
- DOI/link
- GitHub repo link, if available
- Short 2-3 sentence summary
- Citation/BibTeX toggle or block

### Publication 1

```text
TCN-XAI: An Explainable Framework for Short-Term Wind Forecasting Using Dilated Temporal Convolutional Networks

Status: Accepted for publication as Taylor & Francis book chapter
Presented at: International Conference on Big Data, IoT, and Machine Learning (BIM 2025), Dhaka, Bangladesh
Repository: https://github.com/ZahinFuad/wind-power-forecasting-xai
```

Short summary:

```text
This work compares temporal deep learning models for short-term wind power forecasting and uses SHAP and LIME to interpret the selected TCN forecasting model.
```

### Publication 2

```text
AI-Based Fertilizer Optimization Using Random Forests and NSGA-II for Soybean Yield in Brazil

Presented at: IEEE 7th International Conference on Sustainable Technologies for Industry 5.0 (STI 2025), Dhaka, Bangladesh
DOI: https://doi.org/10.1109/STI69347.2025.11367605
Repository: https://github.com/ZahinFuad/ai-driven-fertilizer-optimization
```

Short summary:

```text
This work uses machine learning and multi-objective optimization to analyze fertilizer-yield trade-offs for soybean production using national-level Brazil data.
```

### Publication 3

```text
Reinforcement Learning-Based Self-Healing Logistics Databases for Zero-Downtime Disaster Response Operations

Presented at: IEEE 7th International Conference on Sustainable Technologies for Industry 5.0 (STI 2025), Dhaka, Bangladesh
DOI: https://doi.org/10.1109/STI69347.2025.11367593
Repository: Coming soon
```

Short summary:

```text
This work explores reinforcement learning for self-healing logistics databases designed to maintain operational continuity in disaster-response settings.
```

---

## 7.4 Projects Page: `/projects/`

Purpose: Connect publications and GitHub repos.

Project cards should include:

- Project title
- Short description
- Tags
- Repository link
- Paper link, if available
- Result highlight

### Featured projects

#### AI-Driven Fertilizer Optimization

Tags:

```text
Machine Learning · Random Forest · XGBoost · NSGA-II · Sustainable Agriculture · Optimization
```

Description:

```text
A reproducible research repository accompanying an IEEE STI 2025 paper. The project compares ML models for soybean yield prediction and uses NSGA-II to explore fertilizer-yield trade-offs.
```

Links:

- GitHub repo
- DOI

#### Wind Power Forecasting with XAI

Tags:

```text
Deep Learning · TCN · LSTM · Time-Series Forecasting · SHAP · LIME · Renewable Energy
```

Description:

```text
A research repository comparing temporal deep learning models for short-term wind power forecasting and using SHAP/LIME to interpret the selected forecasting model.
```

Links:

- GitHub repo

#### RL-Based Self-Healing Logistics Databases

Tags:

```text
Reinforcement Learning · Self-Healing Systems · Logistics · Disaster Response · Resilient Infrastructure
```

Description:

```text
A reinforcement learning-based approach to self-healing logistics databases for zero-downtime disaster-response operations.
```

Links:

- DOI
- GitHub repo when available

#### MSc Thesis: Solar Forecasting in Bangladesh

Tags:

```text
Explainable AI · Solar Forecasting · Deep Learning · Probabilistic Forecasting · Renewable Energy
```

Description:

```text
MSc thesis focused on explainable deep learning for probabilistic multi-horizon solar forecasting in Bangladesh.
```

Links:

- Thesis page or summary when ready
- GitHub repo if created

---

## 7.5 CV Page: `/cv/`

Purpose: Provide a clean academic CV download.

Content:

```text
Academic CV

Download my latest academic CV here.
```

Buttons:

- Download PDF
- View Google Scholar
- Email me

Important:

Do not display phone number publicly unless necessary.
Do not overexpose personal address.
Use email, Scholar, GitHub, LinkedIn, ORCID instead.

Recommended file path:

```text
/public/cv/khondaker-zahin-fuad-academic-cv.pdf
```

---

## 7.6 Experience Page: `/experience/`

Purpose: Include industry experience without letting it dominate.

Structure:

1. Education
2. Research experience/publications summary
3. Industry experience
4. Technical skills

### Education

```text
American International University-Bangladesh
MSc Computer Science and Engineering, Intelligent Systems
2024–2026
Thesis: Explainable Deep Learning for Probabilistic Multi-Horizon Solar Forecasting in Bangladesh

Monash University Malaysia
Bachelor of Engineering, Mechatronics (Honours)
2017–2021
```

### Industry experience

Use research-compatible framing:

```text
Riseup Labs — Senior Marketing Executive
2021–Present

- Conducted data-driven platform performance analysis using analytics dashboards.
- Led structured information architecture and system optimization workflows.
- Collaborated across product and engineering teams to improve system usability and user engagement.
```

Do not make this page look like a marketing portfolio. Keep it concise.

---

## 7.7 Contact Page: `/contact/`

Purpose: Make supervisor outreach easy.

Include:

```text
Email: khondakerzahinfuad@gmail.com
Google Scholar
GitHub
LinkedIn
ORCID
CV
```

Optional line:

```text
I am currently exploring PhD opportunities for 2027 in AI, intelligent systems, explainable forecasting, optimization, and resilient decision-support systems.
```

---

## 8. Content Collections / Data Model

Use Astro content collections so publications and projects are easy to maintain.

Suggested structure:

```text
src/
  content/
    publications/
      wind-forecasting-tcn-xai.md
      fertilizer-optimization-nsga2.md
      rl-self-healing-logistics.md
    projects/
      wind-power-forecasting-xai.md
      ai-driven-fertilizer-optimization.md
      rl-self-healing-logistics.md
    news/
      2025-sti-fertilizer.md
      2025-sti-logistics.md
      2025-bim-wind.md
```

### Publication frontmatter example

```yaml
title: "AI-Based Fertilizer Optimization Using Random Forests and NSGA-II for Soybean Yield in Brazil"
authors: "Khondaker Zahin Fuad, ..."
venue: "IEEE 7th International Conference on Sustainable Technologies for Industry 5.0"
year: 2025
status: "Presented"
doi: "https://doi.org/10.1109/STI69347.2025.11367605"
repo: "https://github.com/ZahinFuad/ai-driven-fertilizer-optimization"
tags:
  - Machine Learning
  - Optimization
  - NSGA-II
  - Sustainable Agriculture
summary: "Machine learning and multi-objective optimization for fertilizer-yield trade-off analysis in soybean production."
featured: true
```

### Project frontmatter example

```yaml
title: "Explainable Wind Power Forecasting with Deep Learning"
repo: "https://github.com/ZahinFuad/wind-power-forecasting-xai"
paper: ""
tags:
  - Deep Learning
  - XAI
  - Time-Series Forecasting
  - Renewable Energy
summary: "Compares temporal deep learning models for short-term wind power forecasting and applies SHAP/LIME for explainability."
featured: true
```

---

## 9. Suggested Components

Create these reusable components:

```text
Header.astro
Footer.astro
Hero.astro
SocialLinks.astro
ResearchInterestCard.astro
PublicationCard.astro
ProjectCard.astro
NewsItem.astro
TagList.astro
CVButton.astro
PageTitle.astro
Layout.astro
SEO.astro
```

### Header navigation

```text
Home
Research
Publications
Projects
CV
Contact
```

Optional:

```text
Experience
Notes
```

---

## 10. Design Direction

Style should be inspired by simple academic websites.

### Visual style

- White or very light background
- Dark readable text
- One accent color, such as deep blue or muted teal
- Minimal animations
- Fast loading
- Strong typography
- Plenty of whitespace
- Mobile responsive

### Avoid

- Heavy animations
- Marketing-style hero sections
- Huge stock images
- Overuse of icons
- Skill badge clutter
- Animated GitHub stats
- Excessive colors

### Layout

Recommended max width:

```css
max-width: 980px;
```

Home page can use a two-column hero on desktop:

```text
Left: Bio and links
Right: Headshot or research summary card
```

Mobile should collapse to one column.

---

## 11. SEO and Metadata

### Site title

```text
Khondaker Zahin Fuad — AI Researcher
```

### Homepage title

```text
Khondaker Zahin Fuad | AI Researcher | Explainable AI, Forecasting & Optimization
```

### Meta description

```text
Khondaker Zahin Fuad is an MSc Computer Science and Engineering graduate specializing in Intelligent Systems, with research interests in Explainable AI, deep learning, energy forecasting, reinforcement learning, evolutionary optimization, and decision-support systems.
```

### Keywords

```text
Khondaker Zahin Fuad, Zahin Fuad, AI researcher, Explainable AI, XAI, Deep Learning, Energy Forecasting, Reinforcement Learning, Evolutionary Optimization, Intelligent Systems, Machine Learning, PhD applicant
```

### Open Graph image

Create a simple image:

```text
/public/og-image.png
```

Text on image:

```text
Khondaker Zahin Fuad
AI Researcher | Explainable AI · Forecasting · Optimization
```

---

## 12. Assets Needed

Create or prepare:

```text
/public/cv/khondaker-zahin-fuad-academic-cv.pdf
/public/images/headshot.jpg
/public/images/og-image.png
/public/images/projects/fertilizer-optimization.png
/public/images/projects/wind-forecasting-xai.png
/public/images/projects/rl-logistics.png
```

### Headshot guidance

Use a simple professional photo:

- Neutral background
- Clear face
- Academic/professional dress
- No heavy editing
- Square crop works best

---

## 13. Repository Structure

Recommended Astro structure:

```text
zahinfuad.github.io/
  .github/
    workflows/
      deploy.yml
  public/
    cv/
      khondaker-zahin-fuad-academic-cv.pdf
    images/
      headshot.jpg
      og-image.png
      projects/
  src/
    components/
    content/
      publications/
      projects/
      news/
    layouts/
      BaseLayout.astro
    pages/
      index.astro
      research.astro
      publications.astro
      projects.astro
      cv.astro
      experience.astro
      contact.astro
    styles/
      global.css
  astro.config.mjs
  package.json
  README.md
```

---

## 14. GitHub Pages Deployment Plan

Use GitHub Actions with Astro's recommended deployment workflow.

Create:

```text
.github/workflows/deploy.yml
```

Recommended workflow:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v6

      - name: Install, build, and upload your site
        uses: withastro/action@v6

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v5
```

GitHub repository settings:

```text
Settings → Pages → Source → GitHub Actions
```

---

## 15. Codex Build Prompt

Use this prompt in Codex:

```text
Build a lightweight Astro academic research website for Khondaker Zahin Fuad.

Goal: The site should position him as an AI/ML researcher and prospective PhD applicant focused on Explainable AI, forecasting, optimization, reinforcement learning, and resilient decision-support systems.

Use Astro with static pages and content collections for publications, projects, and news. Keep the design minimal, academic, responsive, and fast. Avoid flashy animations and marketing-style layouts.

Pages needed:
- Home
- Research
- Publications
- Projects
- CV
- Experience
- Contact

Include reusable components:
- Header
- Footer
- Hero
- SocialLinks
- PublicationCard
- ProjectCard
- ResearchInterestCard
- NewsItem
- TagList
- SEO component

Use the content and structure from this planning document. Add placeholder links for Google Scholar, ORCID, LinkedIn, and CV if exact URLs are not available. Use `zahinfuad.github.io` as the initial GitHub Pages site URL.

Make the site ready for GitHub Pages deployment using GitHub Actions.
```

---

## 16. Homepage Copy Draft

```text
Khondaker Zahin Fuad

AI/ML Researcher | MSc CSE, Intelligent Systems
Explainable AI · Forecasting · Optimization · Decision-Support Systems

I am an MSc Computer Science and Engineering graduate specializing in Intelligent Systems. My research focuses on applied AI methods for real-world forecasting, optimization, and resilient decision-making.

My current work explores explainable deep learning for renewable energy forecasting, machine learning and evolutionary optimization for sustainable agriculture, and reinforcement learning for self-healing logistics systems.
```

Buttons:

```text
View CV
Google Scholar
GitHub
LinkedIn
Email
```

---

## 17. Publication Card Format

Each publication card should display:

```text
Title
Venue/status/year
Short summary
Tags
Links: DOI / GitHub / BibTeX
```

Example:

```text
AI-Based Fertilizer Optimization Using Random Forests and NSGA-II for Soybean Yield in Brazil
IEEE STI 2025

Machine learning and multi-objective optimization for fertilizer-yield trade-off analysis in soybean production.

Tags: Machine Learning, Optimization, NSGA-II, Sustainable Agriculture

Links: DOI | GitHub | BibTeX
```

---

## 18. Project Card Format

Each project card should display:

```text
Project title
Short description
Methods/tools
Result highlight
Links
```

Example:

```text
Explainable Wind Power Forecasting with Deep Learning

Compared TCN, LSTM, GRU, CNN-LSTM, and Transformer models for short-term wind power forecasting, then used SHAP and LIME to explain TCN predictions.

Methods: TCN, LSTM, SHAP, LIME, Time-Series Forecasting
Links: GitHub
```

---

## 19. What Not To Include

Do not include:

- Phone number on the public website
- Full home address
- Long marketing portfolio on the homepage
- Beginner programming projects
- Too many badges or animated GitHub widgets
- Overly broad labels like “tech enthusiast” or “multidisciplinary problem solver”
- Claims that are not supported by publications, repos, or CV

---

## 20. Launch Checklist

Before publishing:

- [ ] Create `zahinfuad.github.io` repository
- [ ] Initialize Astro project
- [ ] Add homepage
- [ ] Add research page
- [ ] Add publications page
- [ ] Add projects page
- [ ] Add CV page
- [ ] Add contact page
- [ ] Upload academic CV PDF
- [ ] Add headshot
- [ ] Add GitHub repository links
- [ ] Add Google Scholar link
- [ ] Add LinkedIn link
- [ ] Add ORCID link if available
- [ ] Add SEO metadata
- [ ] Add Open Graph image
- [ ] Add responsive styling
- [ ] Test mobile view
- [ ] Add deployment workflow
- [ ] Enable GitHub Pages using GitHub Actions
- [ ] Check final deployed site
- [ ] Update GitHub profile README with website link
- [ ] Update LinkedIn with website link
- [ ] Update CV with website link
- [ ] Update email signature with website link

---

## 21. Maintenance Plan

Update the site whenever:

- A paper is accepted or published
- A DOI becomes available
- A GitHub repo is added
- CV changes
- PhD application status changes
- Thesis is completed
- New research project is ready to show

Suggested monthly check:

- Verify all links work
- Update CV if needed
- Check homepage wording
- Add new publications/projects
- Remove outdated “coming soon” items

---

## 22. Priority Build Order

Build in this order:

1. Homepage
2. Publications page
3. Projects page
4. CV page
5. Research page
6. Contact page
7. Experience page
8. SEO polish
9. GitHub Pages deployment
10. Custom domain

The homepage, publications, projects, and CV pages are the most important for PhD supervisors.

---

## 23. Final Desired Impression

A potential PhD supervisor should leave the site thinking:

> Zahin has an unusual but coherent path: engineering background, industry experience, MSc CSE specialization in Intelligent Systems, and applied AI research outputs in forecasting, optimization, and resilient systems. His profile is research-facing and suitable for PhD consideration.

---

## 24. Reference Docs for Builder

- Astro GitHub Pages deployment docs: https://docs.astro.build/en/guides/deploy/github/
- GitHub Pages overview: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- GitHub Pages site creation docs: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- GitHub Pages custom domain docs: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages
