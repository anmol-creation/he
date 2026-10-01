import swisseph from 'swisseph';

const date = '1999-12-22';
const time = '20:45';
const lat = 28.63;
const lng = 79.80;

const localDate = new Date(`${date}T${time}:00+05:30`);
const year = localDate.getUTCFullYear();
const month = localDate.getUTCMonth() + 1;
const day = localDate.getUTCDate();
const hour = localDate.getUTCHours() + localDate.getUTCMinutes() / 60.0 + localDate.getUTCSeconds() / 3600.0;

const jd = swisseph.swe_julday(year, month, day, hour, swisseph.SE_GREG_CAL);
swisseph.swe_set_sid_mode(swisseph.SE_SIDM_LAHIRI, 0, 0);

const flags = swisseph.SEFLG_SIDEREAL;
const houses = swisseph.swe_houses(jd, lat, lng, 'P');
const houses_ex = swisseph.swe_houses_ex(jd, flags, lat, lng, 'P');

const ayanamsa = swisseph.swe_get_ayanamsa_ut(jd);

console.log('JD:', jd);
console.log('Tropical Ascendant (houses.ascendant):', houses.ascendant);
console.log('Sidereal Ascendant (Tropical - Ayanamsa):', (houses.ascendant - ayanamsa + 360) % 360);
if(houses_ex) console.log('Houses_ex Ascendant:', houses_ex.ascendant);
