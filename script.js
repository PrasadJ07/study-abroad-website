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
