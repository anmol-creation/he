window.MapUI = {
    setupUI() {
        // Panel Close
        document.getElementById('close-panel').addEventListener('click', () => {
            document.getElementById('focus-panel').classList.add('hidden');
        });

        // Panel Tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                const tab = e.target.dataset.tab;
                const contentArea = document.getElementById('panel-content-area');
                if(tab === 'parichay') contentArea.innerHTML = '<p>विस्तृत परिचय यहाँ आएगा।</p>';
                if(tab === 'jeevan') contentArea.innerHTML = '<p>जीवन की मुख्य घटनाएँ और टाइमलाइन।</p>';
                if(tab === 'kathayein') contentArea.innerHTML = '<p>प्रचलित कथाएँ और प्रसंग।</p>';
            });
        });

        // Search Toggle
        const searchToggleBtn = document.getElementById('search-toggle-btn');
        const searchInput = document.getElementById('map-search-input');
        if (searchToggleBtn && searchInput) {
            searchToggleBtn.addEventListener('click', () => {
                searchInput.classList.toggle('collapsed');
                if (!searchInput.classList.contains('collapsed')) {
                    searchInput.focus();
                } else {
                    const res = document.getElementById('map-search-results');
                    if (res) res.style.display = 'none';
                }
            });
        }

        // Search Logic
        document.getElementById('map-search-input')?.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const resultsContainer = document.getElementById('map-search-results');

            if (query.length < 2) {
                resultsContainer.style.display = 'none';
                return;
            }

            const dataList = window.HistoricDB ? window.HistoricDB.getAll() : window.historicData;
            const matches = dataList.filter(d =>
                (d.name && d.name.toLowerCase().includes(query)) ||
                (d.id && d.id.toLowerCase().includes(query)) ||
                (d.nameEn && d.nameEn.toLowerCase().includes(query)) ||
                (d.subtitle && d.subtitle.toLowerCase().includes(query))
            ).slice(0, 10);

            if (matches.length > 0) {
                resultsContainer.innerHTML = matches.map(m => `
                    <div class="search-result-item" style="padding: 10px; border-bottom: 1px solid #eee; cursor: pointer; text-align: left;" data-id="${m.id}">
                        <div style="font-weight: 600; color: var(--text-dark);">${m.name} ${m.nameEn ? `(${m.nameEn})` : ''}</div>
                        <div style="font-size: 0.8rem; color: #666;">${m.subtitle || ''}</div>
                    </div>
                `).join('');
                resultsContainer.style.display = 'block';

                document.querySelectorAll('.search-result-item').forEach(item => {
                    item.addEventListener('click', (ev) => {
                        const id = ev.currentTarget.dataset.id;
                        document.getElementById('map-search-input').value = ev.currentTarget.querySelector('div').innerText;
                        resultsContainer.style.display = 'none';

                        document.querySelectorAll('.map-node').forEach(n => n.style.opacity = '1');
                        document.querySelectorAll('.connection-line').forEach(l => l.style.opacity = '1');

                        if (window.MapControls) window.MapControls.focusOnNode(id);
                        const nodeData = dataList.find(d => d.id === id);
                        if (nodeData) this.openPanel(nodeData);
                    });
                });
            } else {
                resultsContainer.innerHTML = '<div style="padding: 10px; color: #666; text-align: left;">No results found</div>';
                resultsContainer.style.display = 'block';
            }
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                const resultsContainer = document.getElementById('map-search-results');
                if (resultsContainer) resultsContainer.style.display = 'none';
            }
        });

        // Legend Interaction
        const legendDots = document.querySelectorAll('.legend-dot');
        const legendPopup = document.getElementById('legend-popup');
        const legendText = document.getElementById('legend-text');

        if (legendDots && legendPopup) {
            legendDots.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    legendText.textContent = dot.dataset.desc;
                    legendPopup.style.display = 'block';

                    setTimeout(() => {
                        legendPopup.style.display = 'none';
                    }, 3000);
                });
            });

            document.addEventListener('click', () => {
                legendPopup.style.display = 'none';
            });
        }
    },

    openPanel(data) {
        const panel = document.getElementById('focus-panel');
        document.getElementById('panel-name').textContent = data.name;
        document.getElementById('panel-subtitle').textContent = data.subtitle || '';

        const dotsContainer = document.getElementById('panel-dots');
        dotsContainer.innerHTML = '';
        const nodeColor = data.inheritedColor || '#FF6B35';
        dotsContainer.innerHTML += `<div class="dot" style="background-color: ${nodeColor}"></div>`;

        let parichayHtml = data.parichay ? `<p>${data.parichay}</p>` : '<p>विस्तृत परिचय उपलब्ध नहीं है।</p>';

        let vanshText = 'अन्य';
        if(nodeColor === '#FF9900') vanshText = 'सूर्यवंश (Suryavansh)';
        else if(nodeColor === '#4169E1') vanshText = 'चंद्रवंश (Chandravansh)';

        let yugText = 'अज्ञात';
        if(data.yug === 'satya') yugText = 'सत्य युग';
        else if(data.yug === 'treta') yugText = 'त्रेता युग';
        else if(data.yug === 'dwapar') yugText = 'द्वापर युग';

        document.getElementById('panel-content-area').innerHTML = `
            <div style="margin-bottom: 15px;">
                <span style="font-size:0.8rem; background:#333; padding:2px 8px; border-radius:10px; margin-right:5px;">${vanshText}</span>
                <span style="font-size:0.8rem; background:#333; padding:2px 8px; border-radius:10px;">${yugText}</span>
            </div>
            ${parichayHtml}

            <div style="margin-top: 20px; text-align: center;">
                <a href="itihas-book.html?entity=${data.id}" style="display:inline-block; background:#FF6B35; color:#fff; text-decoration:none; padding:10px 20px; border-radius:25px; font-weight:600; box-shadow:0 4px 10px rgba(255,107,53,0.3); transition:all 0.3s;">
                    📖 Read Full Info
                </a>
            </div>
        `;

        panel.classList.remove('hidden');
    }
};
