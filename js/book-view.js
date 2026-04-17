// js/book-view.js

document.addEventListener('DOMContentLoaded', () => {

    // Check if historic data is available
    if (!window.HistoricDB || typeof window.HistoricDB.getAll !== 'function') {
        console.error("Historic Data not loaded properly.");
        return;
    }

    const allData = window.HistoricDB.getAll();
    const bookContainer = document.getElementById('itihas-book');
    const staticLeftContent = document.getElementById('static-left-content');
    const staticLeftPageNum = document.getElementById('static-left-pageNum');
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');

    let currentPageIndex = 0; // 0 is cover, 1 is index, then content pages
    let pages = []; // Will store our DOM page elements
    const totalContentPages = allData.length;
    // Total pages = Cover(1) + Index(calculated) + ContentPages

    // Let's create an index list grouped by Yug
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
            // Default to satya if not specified or unknown
            yugGroups['satya'].push(item);
        }
    });

    // Generate HTML for Index Pages
    const itemsPerIndexPage = 15;
    const indexPagesHtml = [];
    let currentIndexContent = '';
    let currentItemCount = 0;
    let indexPageCounter = 1;

    for (const [yug, items] of Object.entries(yugGroups)) {
        if (items.length === 0) continue;

        const yugName = yug.toUpperCase();
        currentIndexContent += `<h3 style="margin-top:1rem; color:var(--secondary-gold);">${yugName} YUG</h3><ul class="index-list">`;

        items.forEach(item => {
            if (currentItemCount >= itemsPerIndexPage) {
                currentIndexContent += `</ul>`;
                indexPagesHtml.push(currentIndexContent);
                currentIndexContent = `<h3 style="margin-top:1rem; color:var(--secondary-gold);">${yugName} YUG (Cont.)</h3><ul class="index-list">`;
                currentItemCount = 0;
            }

            // The real page number of this item will be: Cover(1) + TotalIndexPages + index of item in allData
            currentIndexContent += `
                <li class="index-item" onclick="window.BookApp.goToEntity('${item.id}')">
                    <span>${item.name} <small style="color:#888;">${item.subtitle || ''}</small></span>
                </li>`;
            currentItemCount++;
        });

        currentIndexContent += `</ul>`;
    }

    if (currentIndexContent !== '') {
        indexPagesHtml.push(currentIndexContent);
    }

    const totalIndexPages = indexPagesHtml.length;
    const totalPhysicalPages = 1 + Math.ceil(totalIndexPages / 2) + Math.ceil(totalContentPages / 2); // Physical pages that flip

    // Setup Book Pages array (Logical pages: Cover=0, Index1=1, Index2=2, ... Entity1=...)
    // A physical page element has a front and back.
    // physicalPage[0]: front=Cover(0), back=Index1(1)
    // physicalPage[1]: front=Index2(2), back=Index3(3)

    let logicalPagesData = [];

    // 0. Cover Page
    logicalPagesData.push({
        type: 'cover',
        html: `
            <div class="book-cover">
                <div class="book-title">इतिहास पुराण</div>
                <div class="book-subtitle">The Complete Eternal Lineage</div>
                <div style="margin-top: 2rem; font-size: 4rem;">🕉️</div>
            </div>
        `
    });

    // 1 to N. Index Pages
    indexPagesHtml.forEach((html, idx) => {
        logicalPagesData.push({
            type: 'index',
            html: `
                <div class="index-title">अनुक्रमणिका (Index) ${idx + 1}/${totalIndexPages}</div>
                ${html}
            `
        });
    });

    // Content Pages
    allData.forEach(item => {
        let parentText = '';
        if (item.parent) {
            const parent = window.HistoricDB.getNode(item.parent);
            if (parent) parentText = `<div class="detail-row"><span class="detail-label">वंशज:</span> <span class="detail-value">${parent.name}</span></div>`;
        }

        let spouseText = '';
        if (item.spouseOf) {
            const spouse = window.HistoricDB.getNode(item.spouseOf);
            if (spouse) spouseText = `<div class="detail-row"><span class="detail-label">पति/पत्नी:</span> <span class="detail-value">${spouse.name}</span></div>`;
        }

        logicalPagesData.push({
            type: 'entity',
            id: item.id,
            html: `
                <div class="entity-page">
                    <h2 class="entity-name">${item.name}</h2>
                    <div class="entity-subtitle">${item.subtitle || ''}</div>

                    <div style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.8;">
                        ${item.yug === 'pre-kalpa' ? '✨' : item.yug === 'satya' ? '🌞' : item.yug === 'treta' ? '🏹' : item.yug === 'dwapar' ? '🦚' : '⚔️'}
                    </div>

                    <div class="entity-details">
                        <div class="detail-row">
                            <span class="detail-label">युग:</span>
                            <span class="detail-value" style="text-transform: capitalize;">${item.yug || 'Unknown'}</span>
                        </div>
                        ${parentText}
                        ${spouseText}
                        <div class="detail-row">
                            <span class="detail-label">विवरण:</span>
                            <span class="detail-value">सनातन धर्म के इतिहास में महत्वपूर्ण योगदान। (More details can be added in future database updates).</span>
                        </div>
                    </div>
                </div>
            `
        });
    });

    // Create DOM Elements for physical pages
    let zIndex = totalPhysicalPages;
    let logicalPageIdx = 0;

    while(logicalPageIdx < logicalPagesData.length) {

        const frontData = logicalPagesData[logicalPageIdx];
        const backData = logicalPagesData[logicalPageIdx + 1]; // Might be undefined

        const pageElem = document.createElement('div');
        pageElem.className = 'page';
        pageElem.style.zIndex = zIndex;
        // Keep track of the logical page range this physical page represents
        pageElem.dataset.frontIndex = logicalPageIdx;
        pageElem.dataset.backIndex = backData ? logicalPageIdx + 1 : -1;

        let frontHtml = `
            <div class="page-front">
                ${frontData.html}
                <div class="page-number">${logicalPageIdx}</div>
            </div>
        `;

        let backHtml = '';
        if (backData) {
            backHtml = `
                <div class="page-back">
                    ${backData.html}
                    <div class="page-number">${logicalPageIdx + 1}</div>
                </div>
            `;
        } else {
            // Blank back page
            backHtml = `
                <div class="page-back">
                    <div style="display:flex; justify-content:center; align-items:center; height:100%; color:#ccc; font-style:italic;">[Blank Page]</div>
                    <div class="page-number">${logicalPageIdx + 1}</div>
                </div>
            `;
        }

        pageElem.innerHTML = frontHtml + backHtml;
        bookContainer.appendChild(pageElem);
        pages.push(pageElem);

        logicalPageIdx += 2;
        zIndex--;
    }

    // Book State
    let currentFlippedIndex = -1; // Index of the last physical page that was flipped

    function updateNavButtons() {
        prevBtn.disabled = currentFlippedIndex < 0;
        nextBtn.disabled = currentFlippedIndex >= pages.length - 1;

        // Update Static Left Page content to match the currently visible left page (which is the back of the last flipped page)
        if (currentFlippedIndex >= 0) {
            const flippedPage = pages[currentFlippedIndex];
            const backContent = flippedPage.querySelector('.page-back').innerHTML;
            staticLeftContent.innerHTML = backContent;
        } else {
            // Book is closed
            staticLeftContent.innerHTML = '';
            staticLeftPageNum.innerHTML = '';
        }
    }

    window.BookApp = {
        turnPageRight: function() {
            if (currentFlippedIndex < pages.length - 1) {
                currentFlippedIndex++;
                const page = pages[currentFlippedIndex];

                page.classList.add('turning');
                page.classList.add('flipped');

                // Once animation completes, remove 'turning' to fix z-index
                setTimeout(() => {
                    page.classList.remove('turning');
                    // Ensure flipped pages stay at the bottom of the stack on the left side
                    page.style.zIndex = currentFlippedIndex;
                    updateNavButtons();
                }, 800);
            }
        },

        turnPageLeft: function() {
            if (currentFlippedIndex >= 0) {
                const page = pages[currentFlippedIndex];

                page.classList.add('turning');
                page.classList.remove('flipped');

                // Restore correct z-index for right side
                page.style.zIndex = totalPhysicalPages - currentFlippedIndex;

                currentFlippedIndex--;

                setTimeout(() => {
                    page.classList.remove('turning');
                    updateNavButtons();
                }, 800);
            }
        },

        goToEntity: function(id) {
            // Find which physical page contains this entity on its front or back
            let targetPhysicalIndex = -1;
            let targetLogicalIndex = -1;

            for (let i = 0; i < logicalPagesData.length; i++) {
                if (logicalPagesData[i].id === id) {
                    targetLogicalIndex = i;
                    break;
                }
            }

            if (targetLogicalIndex !== -1) {
                targetPhysicalIndex = Math.floor(targetLogicalIndex / 2);

                // We need to flip pages up to targetPhysicalIndex - 1
                // For instance, if target is on physical page 2 (index 2), we want physical page 1 to be flipped so we see page 2's front.
                // If it's on the back of physical page 2, we want physical page 2 to be flipped so we see its back.

                let targetFlipIndex = -1;

                if (targetLogicalIndex % 2 === 0) {
                    // It's on the front. We need all previous pages flipped.
                    targetFlipIndex = targetPhysicalIndex - 1;
                } else {
                    // It's on the back. We need this page flipped too.
                    targetFlipIndex = targetPhysicalIndex;
                }

                // Instantly flip pages without delay for quick navigation
                for (let i = 0; i < pages.length; i++) {
                    const page = pages[i];
                    if (i <= targetFlipIndex) {
                        page.classList.add('flipped');
                        page.style.zIndex = i;
                    } else {
                        page.classList.remove('flipped');
                        page.style.zIndex = totalPhysicalPages - i;
                    }
                }

                currentFlippedIndex = targetFlipIndex;
                updateNavButtons();
            }
        }
    };

    // Initialize
    updateNavButtons();

});
