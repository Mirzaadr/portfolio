# Portofolio Websites

This application works as a portofolio website that showcases my experiences and skills in application development.

Access the web in: [https://mirzaadr.github.io/portfolio/](https://mirzaadr.github.io/portfolio/)

## Technology Used

- React JS
- Tailwind CSS
- Vite
- framer-motion
- tsparticle

## Editing portfolio content

Edit `src/content/portfolio.json` to change the displayed copy, links, experience, projects, or technology groups. Technology asset keys are `docker`, `dotnetcore`, `figma`, `flutter`, `googlecloud`, `kubernetes`, `nodejs`, `postgresql`, `reactjs`, `sqlserver`, and `tailwind`; each key maps to an existing PNG in `src/assets/tech`.

Content is bundled into the application, so changes require a rebuild and deploy. Remote content loading is intentionally deferred to a later step.
