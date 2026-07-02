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
            if (parent) parentText = `<div class="sp-detail-row"><span class="sp-detail-label">वंशज:</span> <span class="sp-detail-value">${parent.name}</span></div>`;
        }

        let spouseText = '';
        if (item.spouseOf) {
            const spouse = window.HistoricDB.getNode(item.spouseOf);
            if (spouse) spouseText = `<div class="sp-detail-row"><span class="sp-detail-label">पति/पत्नी:</span> <span class="sp-detail-value">${spouse.name}</span></div>`;
        }

        pagesData.push({
            type: 'entity',
            id: item.id,
            html: `
                <div class="page-inner-content sp-entity-page">
                    <h2 class="sp-entity-name">${item.name}</h2>
                    <div class="sp-entity-subtitle">${item.subtitle || ''}</div>

                    <div style="font-size: 4rem; margin-bottom: 2rem; opacity: 0.8;">
                        ${item.yug === 'pre-kalpa' ? '✨' : item.yug === 'satya' ? '🌞' : item.yug === 'treta' ? '🏹' : item.yug === 'dwapar' ? '🦚' : '⚔️'}
                    </div>

                    <div class="sp-entity-details">
                        <div class="sp-detail-row">
                            <span class="sp-detail-label">युग:</span>
                            <span class="sp-detail-value" style="text-transform: capitalize;">${item.yug || 'Unknown'}</span>
                        </div>
                        ${parentText}
                        ${spouseText}
                        <div class="sp-detail-row">
                            <span class="sp-detail-label">विवरण:</span>
                            <span class="sp-detail-value">${item.parichay || 'सनातन धर्म के इतिहास में महत्वपूर्ण योगदान।'}</span>
                        </div>
                        ${item.events ? `
                        <div class="sp-detail-row" style="margin-top: 1rem;">
                            <span class="sp-detail-label">प्रमुख घटनाएँ:</span>
                            <ul style="margin: 0.5rem 0 0 1.5rem; padding: 0;">
                                ${item.events.map(ev => `<li>${ev}</li>`).join('')}
                            </ul>
                        </div>` : ''}
                        ${item.kathayein ? `
                        <div class="sp-detail-row" style="margin-top: 1rem;">
                            <span class="sp-detail-label">कथाएँ व प्रसंग:</span>
                            ${item.kathayein.map(katha => `
                                <div style="margin-top: 1rem; background: rgba(0,0,0,0.03); padding: 1rem; border-radius: 8px; border-left: 3px solid var(--primary-saffron);">
                                    <strong style="display: block; color: var(--primary-saffron); margin-bottom: 0.5rem;">${katha.title}</strong>
                                    <em style="display: block; font-size: 0.85rem; color: #666; margin-bottom: 0.5rem;">Source: ${katha.source}</em>
                                    <p style="white-space: pre-line; margin: 0; font-size: 0.95rem; line-height: 1.6;">${katha.content}</p>
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
});
