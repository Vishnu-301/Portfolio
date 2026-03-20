const projects = [
    {
        title: "Flight bookimg site",
        description: "A free space to book flights and hotels for your next trip. Created with express for the backend and bootstrap css for styling and responsiveness and postgresql for database management.",
        image: "public/img/skywave.png",
        link: "https://skywave-2.onrender.com"
    },
    {
        title: "AgriAI",
        description: "A job finder workspace to find, secure and create your job according to your taste. Created with laravel, alpinejs and tailwind for styling and responsiveness and postgresql for database management.",
        image: "public/img/agriai.png",
        link: "https://agriai-da00.onrender.com/"
    },
    {
        title: "Flourush blog",
        description: "A mini blog site that runs on express and an api with no database integration, just basic json file for data management and tailwind for styling and responsiveness.",
        image: "public/img/flourushhome.png",
        link: "https://flourish-blog.onrender.com"
    },
    {
        title: "V-Stack landing page",
        description: "A landing page for a saas product built with tailwind css and vanilla javascript for the dark mode toggle and responsiveness.",
        image: "public/img/vstack.png",
        link: "https://v-stack.onrender.com"
    },
    {
        title: "Monomart e-commerce site",
        description: "An e-commerce site built with laravel for the backend and tailwind css for styling and responsiveness and mysql for database management.",
        image: "public/img/monomarthome.png",
        link: "portfolio.html#project1"
    }
];

const portfolioContainer = document.querySelector(".featured-projects");

projects.forEach(project => {
    const projectCard = `  <div
    class="reveal bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-105">
    <div class="h-64 overflow-y-auto">
        <img src="${project.image}" class="w-full object-cover" alt="${project.title}" />
    </div>
    <div class="p-6">
        <h3 class="text-xl font-semibold text-gray-900 mb-3">
           ${project.title}
        </h3>
        <p class="text-gray-700 mb-4">
            ${project.description}
        </p>
        <a href="${project.link}"
            class="inline-block text-blue-600 hover:text-blue-700 font-semibold">View demo →</a>
    </div>
</div>`;
    portfolioContainer.innerHTML += projectCard;
});