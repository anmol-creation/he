// js/entity-list.js

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    const categoryTitleEl = document.getElementById('category-title');
    const pageTitleEl = document.getElementById('page-title');
    const entityListEl = document.getElementById('entity-list');

    // Category mapping for title and filtering logic
    const categoryConfig = {
        'dynasties': {
            title: 'प्रमुख वंश',
            filter: (entity) => false // We don't have explicit dynasty entities yet, could filter by root nodes
        },
        'kings': {
            title: 'महान राजा व सम्राट',
            filter: (entity) => entity.subtitle && (entity.subtitle.includes('राजा') || entity.subtitle.includes('सम्राट') || entity.subtitle.includes('अवतार'))
        },
        'eras': {
            title: 'कालगणना और युग',
            filter: (entity) => false // Not explicitly modeled as entities
        },
        'surnames': {
            title: 'Surnames / गोत्र',
            filter: (entity) => false
        },
        'sages': {
            title: 'ऋषि परंपरा',
            filter: (entity) => entity.subtitle && (entity.subtitle.includes('ऋषि') || entity.subtitle.includes('मुनि') || entity.subtitle.includes('गुरु'))
        }
    };

    // As a fallback or general list, if no category logic matches, we might just show all or show an empty state.
    // For now, let's implement basic filtering based on the 'type' or keywords in 'subtitle'

    let config = categoryConfig[category];
    if (!config) {
        config = { title: 'All Entities', filter: () => true };
    }

    categoryTitleEl.textContent = config.title;
    pageTitleEl.textContent = config.title;

    // Handle special cases where we want to group or show specific items
    let filteredEntities = [];

    if (category === 'kings') {
        filteredEntities = historicData.filter(e => e.subtitle && (e.subtitle.includes('राजा') || e.subtitle.includes('अवतार') || e.subtitle.includes('पुत्र') && e.parent));
    } else if (category === 'sages') {
        filteredEntities = historicData.filter(e => e.subtitle && (e.subtitle.includes('ऋषि') || e.subtitle.includes('मुनि') || e.subtitle.includes('कुमार')));
    } else if (category === 'dynasties') {
         // Show root nodes as dynasties roughly
         filteredEntities = historicData.filter(e => e.type === 'root' || !e.parent);
    } else {
        // Default: show all
        filteredEntities = historicData;
    }

    // Removing completely empty or unhelpful nodes (like spouses with no other info maybe, but keeping it simple)

    if (filteredEntities.length === 0) {
        entityListEl.innerHTML = '<p style="text-align:center; color:#666;">No entities found in this category.</p>';
        return;
    }

    let html = '';
    filteredEntities.forEach(entity => {
        html += `
            <a href="itihas-book.html?entity=${entity.id}" class="entity-item">
                <div class="entity-name">${entity.name}</div>
                <div class="entity-subtitle">${entity.subtitle || ''}</div>
            </a>
        `;
    });

    entityListEl.innerHTML = html;
});
