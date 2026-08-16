// js/single-page-book.js

document.addEventListener('DOMContentLoaded', () => {

    const initBook = () => {
        if (!window.HistoricDB || typeof window.HistoricDB.getAll !== 'function') {
            console.error("Historic Data not loaded properly.");
            return;
        }

        const allData = window.HistoricDB.getAll();
    const sliderContainer = document.getElementById('book-slider');
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');

    let currentPageIndex = 0;
    let pagesData = [];

    // Grouping by Yug for the index
    const yugGroups = {
        'pre-kalpa': [],
        'satya': [],
        'treta': [],
        'dwapar': [],
        'kali': []
    };

    allData.forEach(item => {
        if (item.yug && yugGroups[item.yug]) {
            yugGroups[item.yug].push(item);
        } else {
            yugGroups['satya'].push(item);
        }
    });

    // Generate Index Pages Html
    const itemsPerIndexPage = 20; // more items fit since it's full screen
    const indexPagesHtml = [];
    let currentIndexContent = '';
    let currentItemCount = 0;

    for (const [yug, items] of Object.entries(yugGroups)) {
        if (items.length === 0) continue;

        const yugName = yug.toUpperCase();
        currentIndexContent += `<h3 style="margin-top:1.5rem; color:var(--secondary-gold); font-size:1.5rem;">${yugName} YUG</h3><ul class="sp-index-list">`;

        items.forEach(item => {
            if (currentItemCount >= itemsPerIndexPage) {
                currentIndexContent += `</ul>`;
                indexPagesHtml.push(currentIndexContent);
                currentIndexContent = `<h3 style="margin-top:1.5rem; color:var(--secondary-gold); font-size:1.5rem;">${yugName} YUG (Cont.)</h3><ul class="sp-index-list">`;
                currentItemCount = 0;
            }

            currentIndexContent += `
                <li class="sp-index-item" onclick="window.SinglePageBookApp.goToEntity('${item.id}')">
                    <span>${item.name} <small style="color:#888;">${item.subtitle || ''}</small></span>
                </li>`;
            currentItemCount++;
        });

        currentIndexContent += `</ul>`;
    }

    if (currentIndexContent !== '') {
        indexPagesHtml.push(currentIndexContent);
    }

    // 1. Cover Page
    pagesData.push({
        type: 'cover',
        html: `
            <div class="page-inner-content sp-cover">
                <div class="sp-title">इतिहास पुराण</div>
                <div class="sp-subtitle">The Complete Eternal Lineage</div>
                <div style="margin-top: 3rem; font-size: 5rem;">🕉️</div>
            </div>
        `
    });

    // 2. Index Pages
    indexPagesHtml.forEach((html, idx) => {
        pagesData.push({
            type: 'index',
            html: `
                <div class="page-inner-content">
                    <div class="sp-index-title">अनुक्रमणिका (Index) ${idx + 1}/${indexPagesHtml.length}</div>
                    ${html}
                </div>
            `
        });
    });

    // 3. Content Pages
    allData.forEach(item => {
        let parentText = '';
        if (item.parent) {
            const parent = window.HistoricDB.getNode(item.parent);
            if (parent) parentText = `<div class="sambandh-item"><span class="sambandh-label">PARENT</span> <span class="sambandh-value" onclick="window.SinglePageBookApp.goToEntity('${parent.id}')" style="cursor:pointer; color:#1A1A1A;">${parent.name}</span></div>`;
        }

        let spouseText = '';
        if (item.spouseOf) {
            const spouse = window.HistoricDB.getNode(item.spouseOf);
            if (spouse) spouseText = `<div class="sambandh-item"><span class="sambandh-label">SPOUSE</span> <span class="sambandh-value" onclick="window.SinglePageBookApp.goToEntity('${spouse.id}')" style="cursor:pointer; color:#1A1A1A;">${spouse.name}</span></div>`;
        }

        // Try to find children (nodes where parent == this item)
        let children = window.HistoricDB.getAll().filter(n => n.parent === item.id);
        let childrenText = '';
        if (children.length > 0) {
            const childrenLinks = children.map(c => `<span onclick="window.SinglePageBookApp.goToEntity('${c.id}')" style="cursor:pointer; color:#1A1A1A;">${c.name}</span>`).join(', ');
            childrenText = `<div class="sambandh-item"><span class="sambandh-label">CHILDREN</span> <span class="sambandh-value">${childrenLinks}</span></div>`;
        }

        const iconMap = {
            'pre-kalpa': '✨',
            'satya': '🌞',
            'treta': '🏹',
            'dwapar': '🦚',
            'kali': '⚔️'
        };
        const mainIcon = iconMap[item.yug] || '🕉️';

        pagesData.push({
            type: 'entity',
            id: item.id,
            html: `
                <div class="page-inner-content sp-entity-page">
                    <!-- ABOVE THE FOLD -->
                    <div class="sp-above-fold">
                        <div class="sp-hero-image-placeholder">
                            ${mainIcon}
                        </div>
                        <h2 class="sp-entity-name">${item.name}</h2>
                        <div class="sp-entity-subtitle">${item.subtitle || ''}</div>

                        <div class="read-more-btn-container">
                            <button class="read-more-btn" onclick="this.closest('.sp-page').scrollBy({top: window.innerHeight * 0.8, behavior: 'smooth'})">
                                SCROLL DOWN <span>↓</span>
                            </button>
                        </div>
                    </div>

                    <!-- BELOW THE FOLD -->
                    <div class="sp-below-fold">
                        <div class="sp-quick-stats">
                            <div class="stat-pill">ERA <strong style="text-transform: capitalize;">${item.yug || 'UNKNOWN'}</strong></div>
                            ${item.weapon ? `<div class="stat-pill">WEAPON <strong>${item.weapon}</strong></div>` : ''}
                            ${item.mount ? `<div class="stat-pill">MOUNT <strong>${item.mount}</strong></div>` : ''}
                            ${item.abode ? `<div class="stat-pill">ABODE <strong>${item.abode}</strong></div>` : ''}
                        </div>

                        <div class="sp-narrative-text">
                            <p>${item.parichay || 'सनातन धर्म के इतिहास में इनका महत्वपूर्ण स्थान है। इनके जीवन और कार्यों का वर्णन विभिन्न ग्रंथों में मिलता है।'}</p>
                        </div>

                        ${(parentText || spouseText || childrenText) ? `
                        <div class="sp-sambandh-widget">
                            <h3 class="sp-sambandh-title">FAMILY RELATIONS</h3>
                            <div class="sambandh-grid">
                                ${parentText}
                                ${spouseText}
                                ${childrenText}
                            </div>
                        </div>
                        ` : ''}

                        ${item.events ? `
                        <div class="sp-detail-row">
                            <span class="sp-detail-label">KEY EVENTS</span>
                            <ul style="margin: 0.5rem 0 0 1.5rem; padding: 0; font-family: 'Poppins', sans-serif; font-size: 1.1rem; font-weight: 300; line-height: 2; color: #333;">
                                ${item.events.map(ev => `<li style="margin-bottom:1rem;">${ev}</li>`).join('')}
                            </ul>
                        </div>` : ''}

                        ${item.kathayein ? `
                        <div class="sp-detail-row">
                            <span class="sp-detail-label">STORIES & LEGENDS</span>
                            ${item.kathayein.map(katha => `
                                <div class="katha-card">
                                    <strong class="katha-title">${katha.title}</strong>
                                    <em class="katha-source">SOURCE: ${katha.source}</em>
                                    <p class="katha-content">${katha.content}</p>
                                </div>
                            `).join('')}
                        </div>` : ''}
                    </div>
                </div>
            `
        });
    });

    // Render pages to DOM
    pagesData.forEach((pageData, index) => {
        const pageElem = document.createElement('div');
        pageElem.className = 'sp-page';
        pageElem.innerHTML = `
            ${pageData.html}
            <div class="sp-page-number">${index === 0 ? '' : index}</div>
        `;
        sliderContainer.appendChild(pageElem);
    });

    const totalPages = pagesData.length;

    function updateView() {
        sliderContainer.style.transform = `translateX(-${currentPageIndex * 100}vw)`;
        prevBtn.disabled = currentPageIndex === 0;
        nextBtn.disabled = currentPageIndex === totalPages - 1;
    }

    // Touch/Swipe logic
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    const threshold = 50; // min swipe distance

    sliderContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        sliderContainer.style.transition = 'none'; // remove transition for smooth follow
    });

    sliderContainer.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
        const diff = currentX - startX;

        // Prevent sliding past edges
        if ((currentPageIndex === 0 && diff > 0) || (currentPageIndex === totalPages - 1 && diff < 0)) {
            // Add resistance
            sliderContainer.style.transform = `translateX(calc(-${currentPageIndex * 100}vw + ${diff * 0.2}px))`;
        } else {
            sliderContainer.style.transform = `translateX(calc(-${currentPageIndex * 100}vw + ${diff}px))`;
        }
    });

    sliderContainer.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        sliderContainer.style.transition = 'transform 0.5s ease-in-out'; // restore transition

        const diff = currentX - startX;

        if (Math.abs(diff) > threshold) {
            if (diff > 0 && currentPageIndex > 0) {
                // Swipe right -> go left (prev)
                currentPageIndex--;
            } else if (diff < 0 && currentPageIndex < totalPages - 1) {
                // Swipe left -> go right (next)
                currentPageIndex++;
            }
        }

        updateView();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentPageIndex > 0) {
            window.SinglePageBookApp.turnPageLeft();
        } else if (e.key === 'ArrowRight' && currentPageIndex < totalPages - 1) {
            window.SinglePageBookApp.turnPageRight();
        }
    });

    window.SinglePageBookApp = {
        turnPageRight: function() {
            if (currentPageIndex < totalPages - 1) {
                currentPageIndex++;
                updateView();
            }
        },
        turnPageLeft: function() {
            if (currentPageIndex > 0) {
                currentPageIndex--;
                updateView();
            }
        },
        goToEntity: function(id) {
            const targetIndex = pagesData.findIndex(page => page.id === id);
            if (targetIndex !== -1) {
                currentPageIndex = targetIndex;
            }
            updateView();
        }
    };

    // Check if there is an entity ID in the URL to jump to
    const urlParams = new URLSearchParams(window.location.search);
    const targetEntityId = urlParams.get('entity');

    if (targetEntityId) {
        window.SinglePageBookApp.goToEntity(targetEntityId);
    } else {
        updateView(); // Initial state
    }

    };

    initBook();
});
