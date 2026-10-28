const fs = require('fs');

const rajyogasPath = 'kundali-engine/data/rules/rajyogas.json';
let rajyogas = JSON.parse(fs.readFileSync(rajyogasPath, 'utf8'));
rajyogas = rajyogas.filter(y => y.id !== 'chamara_yoga');
fs.writeFileSync(rajyogasPath, JSON.stringify(rajyogas, null, 2));

const knowledgePath = 'kundali-engine/data/rules/knowledge_yogas.json';
let knowledge = JSON.parse(fs.readFileSync(knowledgePath, 'utf8'));
knowledge = knowledge.filter(y => y.id !== 'saraswati_yoga');
fs.writeFileSync(knowledgePath, JSON.stringify(knowledge, null, 2));

console.log('Cleaned up old static Special Yogas from rajyogas.json and knowledge_yogas.json');
