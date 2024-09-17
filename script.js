// script.js

const data = {
    universities: [
        {
            name: "Harvard University",
            programs: [
                "Computer Science",
                "Data Analytics"
            ]
        },
        {
            name: "Stanford University",
            programs: [
                "Computer Science",
                "Artificial Intelligence"
            ]
        },
        {
            name: "MIT",
            programs: [
                "Computer Science",
                "Data Analytics",
                "Business Administration"
            ]
        },
        {
            name: "University of California, Berkeley",
            programs: [
                "Computer Science",
                "Business Administration"
            ]
        },
        {
            name: "University of Cambridge",
            programs: [
                "Artificial Intelligence",
                "Business Administration"
            ]
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchBar = document.getElementById('search-bar');

    searchButton.addEventListener('click', () => {
        const query = searchBar.value.trim().toLowerCase();
        if (query) {
            window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
        }
    });

    searchBar.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchButton.click();
        }
    });
});
