const slider = document.getElementById('trimurti-slider');
const trackFill = document.getElementById('track-fill');
const labels = {
    0: document.getElementById('label-vishnu'),
    1: document.getElementById('label-brahma'),
    2: document.getElementById('label-mahesh')
};
const fillPercentages = { 0: '0%', 1: '50%', 2: '100%' };

// State
let currentDeityIndex = 1;

// Tree Data & Logic
const deitiesData = {
    0: {
        name: 'विष्णु',
        children: [
            { title: 'Intro', content: 'पालनकर्ता, क्षीरसागर वासी, चक्रधारी' },
            { title: 'कहानी', content: 'विष्णु पुराण अनुसार, वे सर्वव्यापी हैं।' },
            { title: '10 अवतार', content: 'मत्स्य, कूर्म, वराह, नृसिंह, वामन, परशुराम, राम, कृष्ण, बुद्ध, कल्कि' },
            { title: 'Connections', content: 'ब्रह्मा रचयिता, महेश संहारक' },
            { title: 'Heritage', content: 'बद्रीनाथ, तिरुपति, जगन्नाथ' }
        ]
    },
    1: {
        name: 'ब्रह्मा',
        children: [
            { title: 'Intro', content: 'सृष्टि रचयिता, चार मुख, अनादि' },
            { title: 'कहानी', content: 'ब्रह्म पुराण अनुसार, कमलोद्भव हैं।' },
            { title: 'संतान', content: 'नारद, अंगिरा, बृहस्पति, पुलस्त्य, दक्ष' },
            { title: 'Connections', content: 'विष्णु नाभिकमल से उत्पन्न' },
            { title: 'Heritage', content: 'पुष्कर ब्रह्मा मंदिर' }
        ]
    },
    2: {
        name: 'महेश',
        children: [
            { title: 'Intro', content: 'संहारकर्ता, त्रिनेत्र, नीलकंठ' },
            { title: 'कहानी', content: 'शिव पुराण अनुसार, वे ही आदि और अंत हैं।' },
            { title: '5 रूप', content: 'सद्योजात, वामदेव, अघोर, तत्पुरुष, ईशान' },
            { title: 'तांडव', content: 'आनंद तांडव, रुद्र तांडव' },
            { title: 'Heritage', content: '१२ ज्योतिर्लिंग, कैलाश' }
        ]
    }
};

const mainTrunk = document.getElementById('main-trunk');
const branchesContainer = document.getElementById('branches-container');
const wiresSvg = document.getElementById('wires-svg');

let isExpanded = false;

function updateSliderUI(value) {
    trackFill.style.width = fillPercentages[value];
    slider.value = value;

    // Update labels
    for (let i = 0; i <= 2; i++) {
        if (i === parseInt(value)) {
            labels[i].classList.add('active');
        } else {
            labels[i].classList.remove('active');
        }
    }
}

function handleSliderChange(value) {
    updateSliderUI(value);
    currentDeityIndex = parseInt(value);
    resetTree();
    mainTrunk.textContent = deitiesData[currentDeityIndex].name;
    mainTrunk.classList.add('active-trunk');
    setTimeout(() => mainTrunk.classList.remove('active-trunk'), 2000);
}

function setSliderValue(value) {
    handleSliderChange(value);
}

// Touch swipe support for mobile
let touchstartX = 0;
let touchendX = 0;
const mainArea = document.querySelector('main');

if (mainArea) {
    mainArea.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    }, {passive: true});

    mainArea.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});
}

function handleSwipe() {
    const threshold = 50;
    if (touchendX < touchstartX - threshold) {
        // Swiped Left - increase index (move towards Mahesh)
        if (currentDeityIndex < 2) setSliderValue(currentDeityIndex + 1);
    }
    if (touchendX > touchstartX + threshold) {
        // Swiped Right - decrease index (move towards Vishnu)
        if (currentDeityIndex > 0) setSliderValue(currentDeityIndex - 1);
    }
}

function resetTree() {
    isExpanded = false;
    branchesContainer.innerHTML = '';
    wiresSvg.innerHTML = '';
}

function expandTrunk() {
    if (isExpanded) return;

    const currentDeity = deitiesData[currentDeityIndex];
    if (!currentDeity.children || currentDeity.children.length === 0) {
        // Shake trunk if no children
        mainTrunk.style.transform = 'translateX(-5px)';
        setTimeout(() => mainTrunk.style.transform = 'translateX(5px)', 100);
        setTimeout(() => mainTrunk.style.transform = 'translateX(0)', 200);
        return;
    }

    isExpanded = true;
    renderChildren(currentDeity.children);
}

function renderChildren(children) {
    branchesContainer.innerHTML = '';
    wiresSvg.innerHTML = '';

    // Randomize margins for organic placement
    const marginOptions = ['0 1rem', '1rem 0', '-1rem 1rem', '1rem -1rem', '2rem 1rem'];

    // Create nodes
    children.forEach((childObj, index) => {
        const node = document.createElement('div');
        node.className = 'child-node';
        node.id = `child-${index}`;

        // Assign a random organic margin
        node.style.margin = marginOptions[index % marginOptions.length];

        const title = document.createElement('h3');
        title.className = 'child-title';
        title.textContent = childObj.title;

        const content = document.createElement('p');
        content.className = 'child-content';
        content.textContent = childObj.content;

        node.appendChild(title);
        node.appendChild(content);

        // Add expansion logic
        node.onclick = (e) => {
            e.stopPropagation(); // Prevent bubbling up

            // Collapse others
            document.querySelectorAll('.child-node.expanded').forEach(expandedNode => {
                if (expandedNode !== node) expandedNode.classList.remove('expanded');
            });

            // Toggle current
            node.classList.toggle('expanded');

            // Redraw wires smoothly
            setTimeout(() => {
                wiresSvg.innerHTML = '';
                drawWires(children.length, false);
            }, 300); // Wait for CSS transition
        };

        branchesContainer.appendChild(node);
    });

    // Need to wait for DOM to update to get coordinates
    requestAnimationFrame(() => {
        drawWires(children.length, true);

        // Animate nodes in
        const nodes = document.querySelectorAll('.child-node');
        nodes.forEach((node, index) => {
            setTimeout(() => {
                node.classList.add('visible');
            }, 500 + (index * 150)); // Stagger appearance after wires
        });
    });
}

function drawWires(count, animate = true) {
    const treeAreaRect = document.getElementById('tree-area').getBoundingClientRect();
    const trunkRect = mainTrunk.getBoundingClientRect();

    // Trunk bottom center relative to tree area
    const startX = trunkRect.left + (trunkRect.width / 2) - treeAreaRect.left;
    const startY = trunkRect.bottom - treeAreaRect.top;

    for (let i = 0; i < count; i++) {
        const childNode = document.getElementById(`child-${i}`);
        if (!childNode) continue;
        const childRect = childNode.getBoundingClientRect();

        // Child top center relative to tree area
        const endX = childRect.left + (childRect.width / 2) - treeAreaRect.left;
        const endY = childRect.top - treeAreaRect.top;

        // Create organic path
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

        // Bezier curve for organic look
        const cp1X = startX;
        const cp1Y = startY + (endY - startY) * 0.6;
        const cp2X = endX;
        const cp2Y = startY + (endY - startY) * 0.4;

        const d = `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;

        path.setAttribute("d", d);
        path.setAttribute("class", "wire");

        wiresSvg.appendChild(path);

        if (animate) {
            // Animate wire drawing
            const length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;

            // Trigger reflow
            path.getBoundingClientRect();

            path.style.transition = `stroke-dashoffset 0.8s ease-in-out ${i * 0.1}s`;
            path.style.strokeDashoffset = '0';
        } else {
            path.style.strokeDashoffset = '0';
        }
    }
}

// Click outside collapses expanded nodes
document.addEventListener('click', (e) => {
    if (!e.target.closest('.child-node')) {
        let changed = false;
        document.querySelectorAll('.child-node.expanded').forEach(node => {
            node.classList.remove('expanded');
            changed = true;
        });

        if (changed) {
            setTimeout(() => {
                wiresSvg.innerHTML = '';
                const currentDeity = deitiesData[currentDeityIndex];
                if (currentDeity.children && currentDeity.children.length > 0) {
                    drawWires(currentDeity.children.length, false);
                }
            }, 300);
        }
    }
});

// Redraw wires on resize
window.addEventListener('resize', () => {
    if (isExpanded) {
        const currentDeity = deitiesData[currentDeityIndex];
        // Quick redraw without animation
        requestAnimationFrame(() => {
            wiresSvg.innerHTML = '';
            if (currentDeity.children && currentDeity.children.length > 0) {
                drawWires(currentDeity.children.length, false);
            }
        });
    }
});

// Initialize
if (slider && trackFill) {
    updateSliderUI(1);
    mainTrunk.classList.add('active-trunk');
    setTimeout(() => mainTrunk.classList.remove('active-trunk'), 2000);
}
