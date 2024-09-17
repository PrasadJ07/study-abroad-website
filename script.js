// script.js

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
