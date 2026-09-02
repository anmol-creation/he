document.addEventListener('DOMContentLoaded', () => {

    // Core state
    const state = {
        currentView: 'index', // 'index' or 'reading'
        activeYuga: 'All', // 'All', 'Satya', 'Treta', 'Dvapara', 'Kali', 'Pre-Kalpa'
        currentEntityId: null,
        entities: []
    };

    // Yuga mappings for standardizing data
    const YUGA_CATEGORIES = ['Pre-Kalpa', 'Satya', 'Treta', 'Dvapara', 'Kali'];

    // DOM Elements
    const elements = {
        desktopMenu: document.getElementById('desktop-yuga-menu'),
        mainContent: document.getElementById('main-content-area')
    };

    // Initialize application
    function init() {
        if (!window.HistoricDB) {
            setTimeout(init, 100);
            return;
        }

        // Fetch all historical nodes (characters/events)
        const allNodes = window.HistoricDB.getAll();

        // Filter out proxy nodes or utility nodes, keep only main characters with data
        state.entities = allNodes.filter(node => node.id && !node.id.includes('_proxy'));

        setupDesktopSidebar();

        // Check URL parameters for direct link
        const urlParams = new URLSearchParams(window.location.search);
        const targetEntityId = urlParams.get('entity');

        if (targetEntityId) {
            renderReadingView(targetEntityId);
        } else {
            renderIndexView();
        }
    }

    // Generate Sidebar Menu
    function setupDesktopSidebar() {
        if (!elements.desktopMenu) return;

        let html = `<li class="veda-yuga-item ${state.activeYuga === 'All' ? 'active' : ''}" onclick="window.VedaApp.setYugaFilter('All')">All Eras</li>`;

        YUGA_CATEGORIES.forEach(yuga => {
            html += `<li class="veda-yuga-item ${state.activeYuga === yuga ? 'active' : ''}" onclick="window.VedaApp.setYugaFilter('${yuga}')">${yuga} Yuga</li>`;
        });

        elements.desktopMenu.innerHTML = html;
    }

    // Get entities grouped or filtered by Yuga
    function getFilteredEntities() {
        if (state.activeYuga === 'All') return state.entities;

        return state.entities.filter(e => {
            const y = (e.yug || 'UNKNOWN').toLowerCase();
            const filter = state.activeYuga.toLowerCase();
            return y.includes(filter);
        });
    }

    // ==========================================
    // VIEW RENDERERS
    // ==========================================

    function renderIndexView() {
        state.currentView = 'index';
        state.currentEntityId = null;

        // Update URL cleanly
        window.history.pushState({}, '', window.location.pathname);
        setupDesktopSidebar(); // refresh active state

        const filtered = getFilteredEntities();

        // 1. Desktop layout (Simple List)
        let listHtml = `<div class="veda-chapter-list">`;
        filtered.forEach((entity, index) => {
            const chapNum = (index + 1).toString().padStart(2, '0');
            listHtml += `
                <div class="veda-chapter-item" onclick="window.VedaApp.renderReadingView('${entity.id}')">
                    <div class="veda-chapter-num">${chapNum}</div>
                    <div class="veda-chapter-details">
                        <h3>${entity.name}</h3>
                        <p>${entity.subtitle || entity.yug + ' Yuga Character'}</p>
                    </div>
                </div>
            `;
        });
        listHtml += `</div>`;

        // 2. Mobile Layout (Accordion grouped by Yuga - shown only via CSS media queries)
        let accordionHtml = `<div class="veda-mobile-accordion">`;

        YUGA_CATEGORIES.forEach(yuga => {
            const yugaEntities = state.entities.filter(e => (e.yug || '').toLowerCase().includes(yuga.toLowerCase()));
            if (yugaEntities.length === 0) return;

            accordionHtml += `
                <div class="veda-accordion-item" onclick="this.classList.toggle('active')">
                    <div class="veda-accordion-header">
                        <span>${yuga} Yuga</span>
                        <span>▼</span>
                    </div>
                    <div class="veda-accordion-content">
                        <div class="veda-chapter-list" style="gap:0.5rem;">
            `;

            yugaEntities.forEach((entity, idx) => {
                const chapNum = (idx + 1).toString().padStart(2, '0');
                accordionHtml += `
                    <div class="veda-chapter-item" style="padding:1rem; border-color:transparent; border-bottom:1px solid #eee;" onclick="event.stopPropagation(); window.VedaApp.renderReadingView('${entity.id}')">
                        <div class="veda-chapter-num" style="font-size:1.2rem;">${chapNum}</div>
                        <div class="veda-chapter-details">
                            <h3 style="font-size:1.1rem;">${entity.name}</h3>
                        </div>
                    </div>
                `;
            });

            accordionHtml += `</div></div></div>`;
        });
        accordionHtml += `</div>`;


        elements.mainContent.innerHTML = `
            <div class="veda-index-header">
                <h1 class="veda-index-title">अनुक्रमणिका (Index)</h1>
                <p style="color:var(--veda-text-light); margin-top:0.5rem;">${state.activeYuga === 'All' ? 'Complete' : state.activeYuga + ' Yuga'} Catalog</p>
            </div>

            <!-- Shows on Mobile -->
            ${state.activeYuga === 'All' ? accordionHtml : ''}

            <!-- Shows on Desktop (or Mobile if filtered) -->
            ${(state.activeYuga !== 'All' || window.innerWidth > 900) ? listHtml : ''}
        `;

        window.scrollTo(0,0);
    }

    function renderReadingView(entityId) {
        const entityIndex = state.entities.findIndex(e => e.id === entityId);
        if (entityIndex === -1) return;

        const entity = state.entities[entityIndex];
        state.currentView = 'reading';
        state.currentEntityId = entityId;

        // Update URL
        window.history.pushState({}, '', `${window.location.pathname}?entity=${entityId}`);

        // Calculate Next/Prev for pagination
        const prevEntity = entityIndex > 0 ? state.entities[entityIndex - 1] : null;
        const nextEntity = entityIndex < state.entities.length - 1 ? state.entities[entityIndex + 1] : null;

        // Compile content
        const yugaStr = (entity.yug || 'Unknown').charAt(0).toUpperCase() + (entity.yug || 'Unknown').slice(1);

        let storiesHtml = '';
        if (entity.kathayein && entity.kathayein.length > 0) {
            entity.kathayein.forEach(katha => {
                storiesHtml += `
                    <h3 style="font-family: var(--font-heading); margin-top:2rem;">${katha.title}</h3>
                    ${katha.source ? `<p style="font-size:0.8rem; color:var(--veda-primary); text-transform:uppercase;">Source: ${katha.source}</p>` : ''}
                    <p>${katha.content.replace(/\n/g, '<br>')}</p>
                `;
            });
        } else {
            // Fallback to parichay
            storiesHtml = `<p>${(entity.parichay || 'No detailed narrative available at this moment.').replace(/\n/g, '<br>')}</p>`;
        }

        let eventsHtml = '';
        if (entity.events && entity.events.length > 0) {
             eventsHtml = `
                <div style="margin-top: 3rem; background: #fff; padding: 2rem; border: 1px solid var(--veda-border); border-radius: 8px;">
                    <h4 style="font-family: var(--font-heading); margin-top:0; color: var(--veda-primary);">Key Events</h4>
                    <ul style="padding-left: 1.5rem; color: var(--veda-text-light);">
                        ${entity.events.map(ev => `<li style="margin-bottom:0.5rem;">${ev}</li>`).join('')}
                    </ul>
                </div>
             `;
        }

        // Pagination HTML
        let desktopPagination = '';
        let mobilePagination = '<div class="veda-mobile-pagination">';

        if (prevEntity) {
            desktopPagination += `<div class="veda-pagination-side prev" onclick="window.VedaApp.renderReadingView('${prevEntity.id}')" title="Previous: ${prevEntity.name}">❮</div>`;
            mobilePagination += `
                <div class="veda-mobile-page-card" onclick="window.VedaApp.renderReadingView('${prevEntity.id}')">
                    <span class="veda-mobile-page-label">PREVIOUS</span>
                    <span class="veda-mobile-page-title">${prevEntity.name}</span>
                </div>
            `;
        } else {
            mobilePagination += `<div class="veda-mobile-page-card" style="opacity:0.5; pointer-events:none;"><span class="veda-mobile-page-label">START</span></div>`;
        }

        if (nextEntity) {
            desktopPagination += `<div class="veda-pagination-side next" onclick="window.VedaApp.renderReadingView('${nextEntity.id}')" title="Next: ${nextEntity.name}">❯</div>`;
            mobilePagination += `
                <div class="veda-mobile-page-card" onclick="window.VedaApp.renderReadingView('${nextEntity.id}')">
                    <span class="veda-mobile-page-label">NEXT</span>
                    <span class="veda-mobile-page-title">${nextEntity.name}</span>
                </div>
            `;
        } else {
             mobilePagination += `<div class="veda-mobile-page-card" style="opacity:0.5; pointer-events:none;"><span class="veda-mobile-page-label">END</span></div>`;
        }
        mobilePagination += `</div>`;


        elements.mainContent.innerHTML = `
            <!-- Breadcrumbs -->
            <div class="veda-breadcrumbs">
                <span onclick="window.VedaApp.renderIndexView()">Index</span>
                <span class="separator">/</span>
                <span onclick="window.VedaApp.setYugaFilter('${yugaStr}')">${yugaStr} Yuga</span>
                <span class="separator">/</span>
                <span style="color:var(--veda-text);">${entity.name}</span>
            </div>

            <!-- Reading Header -->
            <div class="veda-reading-header">
                <h1 class="veda-reading-title">${entity.name}</h1>
                <div class="veda-reading-subtitle">${entity.subtitle || ''}</div>
                <div class="veda-decorative-line"></div>
            </div>

            <!-- Stats/Meta Grid -->
            <div class="veda-stats-grid">
                <div class="veda-stat-item">
                    <span class="veda-stat-label">ERA</span>
                    <span class="veda-stat-value">${yugaStr}</span>
                </div>
                ${entity.weapon ? `
                <div class="veda-stat-item">
                    <span class="veda-stat-label">WEAPON</span>
                    <span class="veda-stat-value">${entity.weapon}</span>
                </div>` : ''}
                ${entity.mount ? `
                <div class="veda-stat-item">
                    <span class="veda-stat-label">MOUNT</span>
                    <span class="veda-stat-value">${entity.mount}</span>
                </div>` : ''}
            </div>

            <!-- Reading Content with Drop Cap -->
            <div class="veda-reading-content">
                ${storiesHtml}
            </div>

            ${eventsHtml}

            <!-- Pagination Components -->
            ${desktopPagination}
            ${mobilePagination}
        `;

        window.scrollTo(0,0);
    }

    // Expose Global App Controller
    window.VedaApp = {
        renderIndexView,
        renderReadingView,
        setYugaFilter: function(yuga) {
            state.activeYuga = yuga;
            // Always revert to index view when filtering
            renderIndexView();
        }
    };

    // Run Init
    init();
});