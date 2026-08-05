const projects = [
    {
        title: "True Vine Church Website",
        description: "A content-rich church platform with structured pages for sermons, events, and ministry updates, built to balance strong visual presentation with maintainability for non-technical administrators.",
        image: "public/img/truevine.png",
        link: "https://true-vine-church-website.vercel.app/",
        tags: ["express", "node", "react", "postgresql", "typescript", "tailwind"]
    },
    {
        title: "RSS Feeder News Hub",
        description: "A focused news aggregation interface designed for quick browsing, clean organization, and easy access to current information across multiple topics.",
        image: "public/img/rss-feeder.png",
        link: "https://rss-feeder.netlify.app/",
        tags: ["react", "typescript", "tailwind", "postgres", "prisma"]
    },
    {
        title: "Apex Modern Builders",
        description: "A polished home improvement brand website that combines responsive design, conversion-focused layout, and scalable content structure for client-facing marketing.",
        image: "public/img/apex-modern-builders.png",
        link: "https://apex-modern-builders.vercel.app/",
        tags: ["react", "typescript", "tailwind"]
    },
    {
        title: "Iron Forge Gym Landing Page",
        description: "A conversion-oriented fitness landing page with a clean visual system, campaign layout, and lightweight front-end implementation for stronger brand presence.",
        image: "public/img/ironforge.png",
        link: "https://iron-forge-site.netlify.app/",
        tags: ["html", "css", "tailwind", "js", "vanilla"]
    },
    {
        title: "Velour Fashion Brand Site",
        description: "A premium product showcase site designed to create a strong brand impression while staying lightweight, responsive, and easy to maintain.",
        image: "public/img/valour.png",
        link: "https://velour-fashion-brand.netlify.app/",
        tags: ["html", "css", "tailwind", "js", "vanilla"]
    },
    {
        title: "AgriAI Job Finder",
        description: "A full-stack job discovery and posting platform with a structured Laravel backend and accessible user interface for efficient application workflows.",
        image: "public/img/agriai.png",
        link: "https://agriai-da00.onrender.com/",
        tags: ["laravel", "php", "alpinejs", "tailwind", "postgresql"]
    },
    {
        title: "Flourish Blog Platform",
        description: "A lightweight blog application with content organization and publishing flow, designed for fast performance and straightforward content management.",
        image: "public/img/flourushhome.png",
        link: "https://flourish-blog.onrender.com",
        tags: ["express", "node", "ejs", "json", "tailwind"]
    },
    {
        title: "V-Stack SaaS Landing Page",
        description: "A modern product landing page built to present a SaaS offer clearly, with efficient layout structure and responsive interactions across devices.",
        image: "public/img/vstack.png",
        link: "https://v-stack.onrender.com",
        tags: ["html", "tailwind", "vanilla", "js"]
    },
    {
        title: "Lumier Jewelry Store",
        description: "A high-end product display experience focused on brand presentation, clean layout, and smooth browsing without unnecessary overhead.",
        image: "public/img/lumier.png",
        link: "https://lumiere-c0sn.onrender.com",
        tags: ["html", "css", "js"]
    },
    {
        title: "SkyWave Booking Experience",
        description: "A booking-focused web application with search, filtering, and inquiry flow for flight and hotel discovery, designed to feel practical and user-driven.",
        image: "public/img/skywave.png",
        link: "https://skywave-2.onrender.com",
        tags: ["express", "node", "ejs", "postgresql", "bootstrap", "js"]
    },
    {
        title: "Monomart E-Commerce Platform",
        description: "A functional commerce solution with product browsing, cart behavior, and authentication flow built around a Laravel backend and structured data model.",
        image: "public/img/monomarthome.png",
        link: "#",
        tags: ["laravel", "php", "tailwind", "mysql"]
    },
    // {
    //     title: "Operations Dashboard Concept",
    //     description: "A dashboard-focused interface designed for analytics, overview tracking, and user-friendly reporting for internal operational workflows.",
    //     image: "public/img/truevine.png",
    //     link: "#",
    //     tags: ["react", "typescript", "tailwind", "charting"]
    // }
];

const tagColorMap = {
    express: "tag-express",
    node: "tag-node",
    ejs: "tag-ejs",
    postgresql: "tag-postgresql",
    bootstrap: "tag-bootstrap",
    js: "tag-js",
    laravel: "tag-laravel",
    php: "tag-php",
    alpinejs: "tag-alpinejs",
    tailwind: "tag-tailwind",
    json: "tag-json",
    html: "tag-html",
    css: "tag-css",
    mysql: "tag-mysql",
    vanilla: "tag-vanilla",
    react: "tag-react",
    typescript: "tag-typescript",
    prisma: "tag-prisma",
    postgres: "tag-postgres",
    charting: "tag-charting"
};

const portfolioContainer = document.querySelector(".featured-projects");

projects.forEach((project, i) => {
    const tagsHtml = project.tags.map(tag =>
        `<span class="tech-tag ${tagColorMap[tag] || ''}">${tag}</span>`
    ).join('');

    const linkHtml = project.link !== '#'
        ? `<a href="${project.link}" target="_blank" rel="noopener" class="project-link">View live <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></a>`
        : `<span class="project-link" style="opacity:0.4;cursor:default;">In progress</span>`;

    const card = `
    <div class="reveal project-card" style="transition-delay: ${i * 0.07}s">
        <div class="project-img-wrap">
            <img src="${project.image}" alt="${project.title}" loading="lazy" />
            <div class="project-img-overlay"></div>
        </div>
        <div class="project-body">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags-row">${tagsHtml}</div>
            ${linkHtml}
        </div>
    </div>`;

    portfolioContainer.innerHTML += card;
});

/*
https://www.instagram.com/felixdev301?igsh=ZGtiNzdqbHFjbndq

https://www.linkedin.com/in/felix-ifeadi-web-developer-0233b7400

https://www.tiktok.com/@witeboiintech?_r=1&_t=ZS-95CzGrHU5fF

https://x.com/IfeadiF68176
*/
