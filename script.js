document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");

    // Event listeners for navigation
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", (event) => {
            const target = event.target.getAttribute("href").substring(1);
            document.querySelector(`#${target}`).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Search functionality
    window.performSearch = function () {
        const query = document.getElementById('search-input').value.toLowerCase();
        let results = [];
        
        // Simple search through programs and universities
        programs.forEach(program => {
            const matches = program.universities.filter(university => university.toLowerCase().includes(query));
            if (matches.length > 0) {
                results.push({ program: program.name, universities: matches });
            }
        });

        // Display search results
        const searchResults = document.getElementById('search-results');
        if (results.length > 0) {
            searchResults.innerHTML = results.map(result => 
                `<h3>${result.program}</h3><ul>${result.universities.map(university => `<li><a href="#">${university}</a></li>`).join('')}</ul>`
            ).join('');
        } else {
            searchResults.innerHTML = 'No results found.';
        }
    };
});

const programs = [
    { name: "Computer Science", universities: ["University A", "University B"] },
    { name: "Data Analytics", universities: ["University C", "University D"] },
    { name: "Business Administration", universities: ["University E", "University F"] },
    { name: "Artificial Intelligence", universities: ["University G", "University H"] }
];
