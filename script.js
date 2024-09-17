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
    const searchResults = document.getElementById('search-results');

    searchButton.addEventListener('click', () => {
        const query = searchBar.value.trim().toLowerCase();
        if (query) {
            const results = data.universities.filter(uni =>
                uni.name.toLowerCase().includes(query) || 
                uni.programs.some(program => program.toLowerCase().includes(query))
            );

            displayResults(results);
        }
    });

    searchBar.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchButton.click();
        }
    });

    function displayResults(results) {
        searchResults.innerHTML = '';
        if (results.length > 0) {
            results.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <h3>${result.name}</h3>
                    <p><strong>Programs Offered:</strong> ${result.programs.join(', ')}</p>
                `;
                searchResults.appendChild(resultItem);
            });
        } else {
            searchResults.innerHTML = '<p>No results found.</p>';
        }
    }
});
