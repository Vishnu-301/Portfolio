const projects = [
    {
        title: "SkyWave – Flight Booking",
        description: "A full-stack flight and hotel booking platform with search, filters, and booking flow.",
        image: "public/img/skywave.png",
        link: "https://skywave-2.onrender.com",
        tags: ["express", "node", "ejs", "postgresql", "bootstrap", "js"]
    },
    {
        title: "AgriAI – Job Finder",
        description: "A workspace to discover, apply for, and post jobs — built with a full Laravel backend and Alpine.js reactive UI.",
        image: "public/img/agriai.png",
        link: "https://agriai-da00.onrender.com/",
        tags: ["laravel", "php", "alpinejs", "tailwind", "postgresql"]
    },
    {
        title: "Flourish Blog",
        description: "A lightweight blog platform powered by Express with JSON-file data management — no database needed.",
        image: "public/img/flourushhome.png",
        link: "https://flourish-blog.onrender.com",
        tags: ["express", "node", "ejs", "json", "tailwind"]
    },
    {
        title: "V-Stack Landing Page",
        description: "A sleek SaaS landing page with dark mode toggle and smooth scroll — pure Tailwind and vanilla JS.",
        image: "public/img/vstack.png",
        link: "https://v-stack.onrender.com",
        tags: ["html", "tailwind", "vanilla", "js"]
    },
    {
        title: "Lumier Jewelry Store",
        description: "A product showcase site for a jewelry brand — static, polished, and performance-focused.",
        image: "public/img/lumier.png",
        link: "https://lumiere-c0sn.onrender.com",
        tags: ["html", "css", "js"]
    },
    {
        title: "Monomart E-Commerce",
        description: "A full e-commerce platform with product listings, cart, and auth — Laravel backend with MySQL database.",
        image: "public/img/monomarthome.png",
        link: "#",
        tags: ["laravel", "php", "tailwind", "mysql"]
    }
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
    vanilla: "tag-vanilla"
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
