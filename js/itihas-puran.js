// js/itihas-puran.js

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (!searchInput || !searchResults) return;

    // Optional: Add some basic styles for the dropdown items dynamically or rely on CSS
    const resultItemStyle = `
        padding: 10px 15px;
        border-bottom: 1px solid #f0f0f0;
        cursor: pointer;
        display: block;
        text-decoration: none;
        color: var(--text-dark);
        transition: background-color 0.2s;
    `;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        if (query.length < 2) {
            searchResults.style.display = 'none';
            searchResults.innerHTML = '';
            return;
        }

        const results = historicData.filter(entity => {
            return (entity.name && entity.name.toLowerCase().includes(query)) ||
                   (entity.id && entity.id.toLowerCase().includes(query)) ||
                   (entity.subtitle && entity.subtitle.toLowerCase().includes(query));
        }).slice(0, 10); // Limit to top 10 results

        if (results.length > 0) {
            searchResults.innerHTML = results.map(entity => `
                <a href="itihas-book.html?entity=${entity.id}" class="search-result-item" style="${resultItemStyle}">
                    <div style="font-weight: 600; color: var(--primary-saffron);">${entity.name}</div>
                    <div style="font-size: 0.85rem; color: #666;">${entity.subtitle || ''}</div>
                </a>
            `).join('');
            searchResults.style.display = 'block';
        } else {
            searchResults.innerHTML = '<div style="padding: 10px 15px; color: #999;">No results found</div>';
            searchResults.style.display = 'block';
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });

    // Handle hover effect via JS since inline styles are used
    searchResults.addEventListener('mouseover', (e) => {
        const item = e.target.closest('.search-result-item');
        if (item) {
            item.style.backgroundColor = '#f9f9f9';
        }
    });
    searchResults.addEventListener('mouseout', (e) => {
        const item = e.target.closest('.search-result-item');
        if (item) {
            item.style.backgroundColor = 'transparent';
        }
    });
});
