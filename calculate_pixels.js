const SATYA_YEARS = 1728000;
const TRETA_YEARS = 1296000;
const DWAPAR_YEARS = 864000;

const SATYA_NODES = 21;
const TRETA_NODES = 71;
const DWAPAR_NODES = 107;

const PIXELS_PER_NODE = 300; // 100 height + 200 gap

const satyaPixels = SATYA_NODES * PIXELS_PER_NODE;
const tretaPixels = TRETA_NODES * PIXELS_PER_NODE;
const dwaparPixels = DWAPAR_NODES * PIXELS_PER_NODE;

console.log('--- Total Pixels Required ---');
console.log(`Satya Yuga (${SATYA_YEARS} years): ${satyaPixels} pixels`);
console.log(`Treta Yuga (${TRETA_YEARS} years): ${tretaPixels} pixels`);
console.log(`Dwapar Yuga (${DWAPAR_YEARS} years): ${dwaparPixels} pixels`);

console.log('\n--- Years per Pixel Ratio (Dynamically Derived) ---');
console.log(`Satya Yuga: ${SATYA_YEARS} / ${satyaPixels} = ${(SATYA_YEARS / satyaPixels).toFixed(2)} years/pixel`);
console.log(`Treta Yuga: ${TRETA_YEARS} / ${tretaPixels} = ${(TRETA_YEARS / tretaPixels).toFixed(2)} years/pixel`);
console.log(`Dwapar Yuga: ${DWAPAR_YEARS} / ${dwaparPixels} = ${(DWAPAR_YEARS / dwaparPixels).toFixed(2)} years/pixel`);
