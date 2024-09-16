document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");

    // Event listeners for navigation tabs
    document.getElementById('home-tab').addEventListener('click', () => showSection('home'));
    document.getElementById('programs-tab').addEventListener('click', () => showSection('programs'));
    document.getElementById('contact-tab').addEventListener('click', () => showSection('contact'));

    // Display programs on page load
    displayPrograms();

    // Function to show the selected section and hide others
    function showSection(sectionId) {
        const sections = document.querySelectorAll('.content');
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });

        // Show the search box if the home section is visible
        if (sectionId === 'home') {
            document.getElementById('search-box').classList.remove('hidden');
        } else {
            document.getElementById('search-box').classList.add('hidden');
        }
    }

    // Display program list
    function displayPrograms() {
        const programSection = document.getElementById('program-list');
        programSection.innerHTML = ''; // Clear existing content
        programs.forEach(program => {
            let programHTML = `<li><a href="#" data-program="${program.name.toLowerCase().replace(/\s+/g, '-')}" onclick="loadProgramDetails('${program.name.toLowerCase().replace(/\s+/g, '-')}')">${program.name}</a></li>`;
            programSection.innerHTML += programHTML;
        });
    }

    // Load program details dynamically
    window.loadProgramDetails = function(program) {
        window.location.href = `${program}.html`; // Redirect to the program's detail page
    };

    // Search functionality
    window.performSearch = function() {
        const query = document.getElementById('search-input').value.toLowerCase();
        let results = [];
        
        // Search for universities matching the query
        programs.forEach(program => {
            const matches = program.universities.filter(university => university.toLowerCase().includes(query));
            if (matches.length > 0) {
                results.push({ program: program.name, universities: matches });
            }
        });

        // Display search results
        if (results.length > 0) {
            let resultsHTML = results.map(result => 
                `<h3>${result.program}</h3><ul>${result.universities.map(university => `<li><a href="${university.toLowerCase().replace(/\s+/g, '-')}.html">${university}</a></li>`).join('')}</ul>`
            ).join('');
            document.getElementById('search-results').innerHTML = resultsHTML;
        } else {
            document.getElementById('search-results').innerHTML = 'No results found.';
        }
    };
});

const programs = [
    { name: "Computer Science", universities: ["University A", "University B"] },
    { name: "Data Analytics", universities: ["University C", "University D"] },
    { name: "Business Administration", universities: ["University E", "University F"] },
    { name: "Artificial Intelligence", universities: ["University G", "University H"] }
];
