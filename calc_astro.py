import swisseph as swe
import datetime
import pytz

# Birth details
lat = 28.6293
lon = 79.8058
year = 1999
month = 12
day = 22
hour = 20
minute = 45

# Timezone conversion (IST to UTC)
local_tz = pytz.timezone('Asia/Kolkata')
local_time = local_tz.localize(datetime.datetime(year, month, day, hour, minute))
utc_time = local_time.astimezone(pytz.utc)

# Setup Swisseph
swe.set_sid_mode(swe.SIDM_LAHIRI)
swe.set_topo(lon, lat, 0)

# Julian day
jd = swe.julday(utc_time.year, utc_time.month, utc_time.day, utc_time.hour + utc_time.minute/60.0)

# Get Ascendant
houses, ascmc = swe.houses_ex(jd, lat, lon, b'W')
asc = ascmc[0]

# Lahiri sidereal calculation
asc_sid = (asc - swe.get_ayanamsa(jd)) % 360

planets = {
    'Sun': swe.SUN,
    'Moon': swe.MOON,
    'Mars': swe.MARS,
    'Mercury': swe.MERCURY,
    'Jupiter': swe.JUPITER,
    'Venus': swe.VENUS,
    'Saturn': swe.SATURN,
    'Rahu': swe.MEAN_NODE
}

zodiac = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]

def get_sign(deg):
    idx = int(deg / 30)
    return zodiac[idx], deg % 30, idx + 1

print(f"Ascendant: {asc_sid:.2f} - {get_sign(asc_sid)[0]} (Sign {get_sign(asc_sid)[2]})")

for name, pid in planets.items():
    res = swe.calc_ut(jd, pid, swe.FLG_SIDEREAL | swe.FLG_SWIEPH)
    deg = res[0][0]
    sign, rdeg, sign_idx = get_sign(deg)
    print(f"{name}: {deg:.2f} - {sign} ({rdeg:.2f}) (Sign {sign_idx})")

# Ketu is opposite Rahu
rahu_res = swe.calc_ut(jd, swe.MEAN_NODE, swe.FLG_SIDEREAL | swe.FLG_SWIEPH)
ketu_deg = (rahu_res[0][0] + 180) % 360
print(f"Ketu: {ketu_deg:.2f} - {get_sign(ketu_deg)[0]} (Sign {get_sign(ketu_deg)[2]})")
