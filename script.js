// script.js

// Sample data - replace with your actual data or fetch from an API
const programsAndUniversities = {
    "computer science": ["University A", "University B", "University C"],
    "business administration": ["University D", "University E", "University F"],
    "data analytics": ["University G", "University H", "University I"],
    "artificial intelligence": ["University J", "University K", "University L"]
};

function search(query) {
    const results = [];
    const lowerCaseQuery = query.toLowerCase();

    for (const [program, universities] of Object.entries(programsAndUniversities)) {
        if (program.includes(lowerCaseQuery)) {
            results.push({
                program,
                universities
            });
        } else {
            const matchedUniversities = universities.filter(university => university.toLowerCase().includes(lowerCaseQuery));
            if (matchedUniversities.length > 0) {
                results.push({
                    program,
                    universities: matchedUniversities
                });
            }
        }
    }

    return results;
}

document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-bar').value;

    if (query.trim() === '') {
        alert('Please enter a search query.');
        return;
    }

    const results = search(query);

    // Clear previous results
    let resultsContainer = document.getElementById('search-results');
    if (!resultsContainer) {
        resultsContainer = document.createElement('div');
        resultsContainer.id = 'search-results';
        document.querySelector('main').appendChild(resultsContainer);
    } else {
        resultsContainer.innerHTML = '';
    }

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
        results.forEach(result => {
            const programHeader = document.createElement('h2');
            programHeader.textContent = result.program.charAt(0).toUpperCase() + result.program.slice(1);
            resultsContainer.appendChild(programHeader);

            const universityList = document.createElement('ul');
            result.universities.forEach(university => {
                const listItem = document.createElement('li');
                listItem.textContent = university;
                universityList.appendChild(listItem);
            });
            resultsContainer.appendChild(universityList);
        });
    }
});
