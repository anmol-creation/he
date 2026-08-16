// js/vansh-gotra-ui.js

document.addEventListener('DOMContentLoaded', () => {
    // Only run if the elements exist
    const pillarSelect = document.getElementById('pillar-select');
    const subcategorySelect = document.getElementById('subcategory-select');
    const surnameSelect = document.getElementById('surname-select');
    const resultCard = document.getElementById('lineage-result-card');

    if (!pillarSelect) return;

    // Populate Level 1 (Pillars)
    vanshGotraData.pillars.forEach(pillar => {
        const option = document.createElement('option');
        option.value = pillar.id;
        option.textContent = pillar.name;
        pillarSelect.appendChild(option);
    });

    // Handle Level 1 Change -> Populate Level 2
    pillarSelect.addEventListener('change', (e) => {
        const pillarId = e.target.value;

        // Reset subcategory and surname
        subcategorySelect.innerHTML = '<option value="">-- Select Branch / Gotra --</option>';
        subcategorySelect.disabled = true;

        surnameSelect.innerHTML = '<option value="">-- Select Surname --</option>';
        surnameSelect.disabled = true;

        resultCard.style.display = 'none';

        if (pillarId) {
            const pillar = vanshGotraData.pillars.find(p => p.id === pillarId);
            if (pillar && pillar.subcategories) {
                pillar.subcategories.forEach(sub => {
                    const option = document.createElement('option');
                    option.value = sub.id;
                    option.textContent = sub.name;
                    subcategorySelect.appendChild(option);
                });
                subcategorySelect.disabled = false;
            }
        }
    });

    // Handle Level 2 Change -> Populate Level 3
    subcategorySelect.addEventListener('change', (e) => {
        const pillarId = pillarSelect.value;
        const subId = e.target.value;

        // Reset surname
        surnameSelect.innerHTML = '<option value="">-- Select Surname --</option>';
        surnameSelect.disabled = true;
        resultCard.style.display = 'none';

        if (pillarId && subId) {
            const pillar = vanshGotraData.pillars.find(p => p.id === pillarId);
            const sub = pillar.subcategories.find(s => s.id === subId);

            if (sub && sub.surnames) {
                // Sort surnames alphabetically
                const sortedSurnames = [...sub.surnames].sort();
                sortedSurnames.forEach(surname => {
                    const option = document.createElement('option');
                    option.value = surname;
                    option.textContent = surname;
                    surnameSelect.appendChild(option);
                });
                surnameSelect.disabled = false;
            }
        }
    });

    // Handle Level 3 Change -> Show Result
    surnameSelect.addEventListener('change', (e) => {
        const pillarId = pillarSelect.value;
        const subId = subcategorySelect.value;
        const surname = e.target.value;

        if (pillarId && subId && surname) {
            const pillar = vanshGotraData.pillars.find(p => p.id === pillarId);
            const sub = pillar.subcategories.find(s => s.id === subId);

            document.getElementById('res-surname').textContent = surname;
            document.getElementById('res-pillar').textContent = pillar.name;
            document.getElementById('res-branch').textContent = sub.name;
            document.getElementById('res-ancestor').textContent = sub.rootAncestor;

            resultCard.style.display = 'block';
        } else {
            resultCard.style.display = 'none';
        }
    });
});