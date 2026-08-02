import re

with open('js/map-renderer.js', 'r', encoding='utf-8') as f:
    content = f.read()

search = """
        ctx.translate(state.translateX, state.translateY);
        ctx.scale(state.scale, state.scale);

        const dataList = (window.HistoricDB ? window.HistoricDB.getAll() : window.historicData) || [];
"""

replace = """
        ctx.translate(state.translateX, state.translateY);
        ctx.scale(state.scale, state.scale);

        if (state) state.clusterHitBoxes = []; // Reset hitboxes each render

        const dataList = (window.HistoricDB ? window.HistoricDB.getAll() : window.historicData) || [];
"""

new_content = content.replace(search, replace)
with open('js/map-renderer.js', 'w', encoding='utf-8') as f:
    f.write(new_content)
