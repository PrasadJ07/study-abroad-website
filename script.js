document.addEventListener("DOMContentLoaded", () => {
    // Define tabs
    const homeTab = document.getElementById('home-tab');
    const programsTab = document.getElementById('programs-tab');
    const contactTab = document.getElementById('contact-tab');

    // Define sections
    const homeSection = document.getElementById('home');
    const programsSection = document.getElementById('programs');
    const contactSection = document.getElementById('contact');
    const searchBox = document.getElementById('search-box');

    // Define program list
    const programList = document.getElementById('program-list');
    const programs = [
        { name: "Data Science", universities: ["University of California, Berkeley", "University of Washington"] },
        { name: "Machine Learning", universities: ["Stanford University", "University of Illinois"] },
        { name: "Cybersecurity", universities: ["Carnegie Mellon University", "MIT"] },
        { name: "Software Engineering", universities: ["Harvard University", "University of Michigan"] }
    ];

    function displayPrograms() {
        programList.innerHTML = ''; // Clear existing programs
        programs.forEach(program => {
            const programHTML = `<li><h3>${program.name}</h3><p>Available at: ${program.universities.join(', ')}</p></li>`;
            programList.innerHTML += programHTML;
        });
    }

    function performSearch() {
        const query = document.getElementById('search-input').value.toLowerCase();
        // Implement your search logic here
        alert(`Searching for: ${query}`);
    }

    function showSection(sectionToShow) {
        homeSection.classList.add('hidden');
        programsSection.classList.add('hidden');
        contactSection.classList.add('hidden');
        searchBox.classList.add('hidden');

        sectionToShow.classList.remove('hidden');
        if (sectionToShow === homeSection) {
            searchBox.classList.remove('hidden');
        }
    }

    homeTab.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(homeSection);
    });

    programsTab.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(programsSection);
        displayPrograms();
    });

    contactTab.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(contactSection);
    });

    // Initially show the home section
    showSection(homeSection);
});
