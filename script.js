document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".header-nav a");

    window.addEventListener("scroll", () => {
        let currentSection = "home"; // Default active section

        document.querySelectorAll("section").forEach((section) => {
            if (window.scrollY >= section.offsetTop - 50) {
                currentSection = section.id;
            }
        });

        navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href").includes(currentSection));
        });
    });
});
