// js/vansh-directory-ui.js

document.addEventListener('DOMContentLoaded', () => {

    // Core Elements
    const searchInput = document.getElementById('masterSearch');
    const searchResults = document.getElementById('searchResults');

    const selL1 = document.getElementById('level1-mahavansh');
    const selL2 = document.getElementById('level2-ethnicity');
    const selL3 = document.getElementById('level3-community');
    const selL4 = document.getElementById('level4-surname');

    const resultCard = document.getElementById('resultCard');
    const resultName = document.getElementById('resultName');
    const resultPath = document.getElementById('resultPath');

    const db = window.vanshDirectoryData || [];

    // Helper functions
    const getChildren = (parentId) => db.filter(item => item.parentId === parentId);
    const getItem = (id) => db.find(item => item.id === id);

    // Get full path (from node up to root)
    const getPath = (id) => {
        let path = [];
        let current = getItem(id);
        while (current) {
            path.unshift(current); // prepend
            current = current.parentId ? getItem(current.parentId) : null;
        }
        return path;
    };

    // --- 1. Populate Dropdowns Logic --- //

    // Init Level 1
    const mahavanshs = db.filter(item => item.type === 'mahavansh');
    mahavanshs.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.textContent = item.name;
        selL1.appendChild(option);
    });

    const resetSelect = (select, placeholder) => {
        select.innerHTML = `<option value="">-- ${placeholder} --</option>`;
        select.disabled = true;
    };

    const populateSelect = (select, items, placeholder) => {
        resetSelect(select, placeholder);
        if (items.length > 0) {
            select.disabled = false;
            items.forEach(item => {
                const option = document.createElement('option');
                option.value = item.id;
                option.textContent = item.name;
                select.appendChild(option);
            });
        }
    };

    const showResult = (id) => {
        if (!id) {
            resultCard.style.display = 'none';
            return;
        }
        const item = getItem(id);
        const path = getPath(id);

        resultName.textContent = item.name;

        resultPath.innerHTML = path.map((node, index) => {
            let html = `<span class="breadcrumb-item">${node.name}</span>`;
            if (index < path.length - 1) {
                html += `<span class="breadcrumb-separator"><i class="fa-solid fa-chevron-right"></i></span>`;
            }
            return html;
        }).join('');

        resultCard.style.display = 'block';
    };

    // Event Listeners for Cascading
    selL1.addEventListener('change', (e) => {
        const id = e.target.value;
        resetSelect(selL2, 'Select Ethnicity');
        resetSelect(selL3, 'Select Community');
        resetSelect(selL4, 'Select Surname / Gotra');

        if (id) {
            populateSelect(selL2, getChildren(id), 'Select Ethnicity');
            showResult(id);
        } else {
            resultCard.style.display = 'none';
        }
    });

    selL2.addEventListener('change', (e) => {
        const id = e.target.value;
        resetSelect(selL3, 'Select Community');
        resetSelect(selL4, 'Select Surname / Gotra');

        if (id) {
            populateSelect(selL3, getChildren(id), 'Select Community');
            showResult(id);
        } else {
            // fallback to parent result
            showResult(selL1.value);
        }
    });

    selL3.addEventListener('change', (e) => {
        const id = e.target.value;
        resetSelect(selL4, 'Select Surname / Gotra');

        if (id) {
            populateSelect(selL4, getChildren(id), 'Select Surname / Gotra');
            showResult(id);
        } else {
            showResult(selL2.value);
        }
    });

    selL4.addEventListener('change', (e) => {
        const id = e.target.value;
        if (id) {
            showResult(id);
        } else {
            showResult(selL3.value);
        }
    });


    // --- 2. Master Search Logic --- //

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase().trim();
        searchResults.innerHTML = '';

        if (term.length < 2) {
            searchResults.style.display = 'none';
            return;
        }

        // Search logic: check name or tags
        const matches = db.filter(item => {
            if (item.name.toLowerCase().includes(term)) return true;
            if (item.searchTags && item.searchTags.some(tag => tag.toLowerCase().includes(term))) return true;
            return false;
        });

        if (matches.length > 0) {
            searchResults.style.display = 'block';
            matches.forEach(match => {
                const div = document.createElement('div');
                div.className = 'search-result-item';
                div.innerHTML = `
                    <span>${match.name}</span>
                    <span class="result-type-badge">${match.type}</span>
                `;

                div.addEventListener('click', () => {
                    handleSearchResultClick(match.id);
                    searchResults.style.display = 'none';
                    searchInput.value = match.name;
                });

                searchResults.appendChild(div);
            });
        } else {
            searchResults.style.display = 'block';
            searchResults.innerHTML = '<div style="padding: 15px; color: #888; text-align: center;">No matches found</div>';
        }
    });

    // Close search dropdown on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.master-search-container')) {
            searchResults.style.display = 'none';
        }
    });

    const handleSearchResultClick = (id) => {
        const path = getPath(id);

        // Reset all selects first
        selL1.value = '';
        resetSelect(selL2, 'Select Ethnicity');
        resetSelect(selL3, 'Select Community');
        resetSelect(selL4, 'Select Surname / Gotra');

        // Auto-fill cascades based on path
        path.forEach(node => {
            if (node.type === 'mahavansh') {
                selL1.value = node.id;
                populateSelect(selL2, getChildren(node.id), 'Select Ethnicity');
            } else if (node.type === 'ethnicity') {
                selL2.value = node.id;
                populateSelect(selL3, getChildren(node.id), 'Select Community');
            } else if (node.type === 'community') {
                selL3.value = node.id;
                populateSelect(selL4, getChildren(node.id), 'Select Surname / Gotra');
            } else if (node.type === 'surname') {
                selL4.value = node.id;
            }
        });

        // Show result card
        showResult(id);
    };

});