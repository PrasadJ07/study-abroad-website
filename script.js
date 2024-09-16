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
        { name: "Computer Science", universities: ["University A", "University B"] },
        { name: "Data Analytics", universities: ["University C", "University D"] },
        { name: "Business Administration", universities: ["University E", "University F"] },
        { name: "Artificial Intelligence", universities: ["University G", "University H"] }
    ];

    function displayPrograms() {
        programList.innerHTML = ''; // Clear existing programs
        programs.forEach(program => {
            const programHTML = `<li><h3>${program.name}</h3></li>`;
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
