const fs = require('fs');
let code = fs.readFileSync('js/historic-map.js', 'utf8');

// Look for the specific broken block
const brokenBlock = `    if (!isMacroMode && focusedNodeId) {
        // Find which period this node's entryNode matches
        const matchedPeriod = periods.find(p => p.entryNode === focusedNodeId);
        if (matchedPeriod) activeId = matchedPeriod.id;
    }
            marker.classList.remove('active');
        }
    });
}`;

const fixedBlock = `    if (!isMacroMode && focusedNodeId) {
        // Find which period this node's entryNode matches
        const matchedPeriod = periods.find(p => p.entryNode === focusedNodeId);
        if (matchedPeriod) activeId = matchedPeriod.id;
    }

    markers.forEach(marker => {
        if (marker.dataset.id === activeId) {
            marker.classList.add('active');
        } else {
            marker.classList.remove('active');
        }
    });
}`;

code = code.replace(brokenBlock, fixedBlock);
fs.writeFileSync('js/historic-map.js', code);
