document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");

    // Event listeners for the navigation tabs
    document.getElementById('home-tab').addEventListener('click', () => showSection('home'));
    document.getElementById('programs-tab').addEventListener('click', () => showSection('programs'));
    document.getElementById('contact-tab').addEventListener('click', () => showSection('contact'));

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

    // Display program list and details
    displayPrograms();
});

const programs = [
    { name: "Computer Science", universities: ["University A", "University B"] },
    { name: "Data Analytics", universities: ["University C", "University D"] },
    { name: "Business Administration", universities: ["University E", "University F"] },
    { name: "Artificial Intelligence", universities: ["University G", "University H"] }
];

function displayPrograms() {
    const programSection = document.getElementById('program-list');
    programs.forEach(program => {
        let programHTML = `<li><a href="${program.name.toLowerCase().replace(/\s+/g, '-')}.html">${program.name}</a></li>`;
        programSection.innerHTML += programHTML;
    });
}

function performSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const results = programs.flatMap(program =>
        program.universities.filter(university => university.toLowerCase().includes(query))
    );
    
    alert(results.length > 0 ? `Search Results:\n${results.join('\n')}` : 'No results found.');
}
