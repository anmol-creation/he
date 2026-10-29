import http from 'http';
setTimeout(() => {
    http.get('http://localhost:3000/api/calculate?dob=1999-12-22&tob=10:30&lat=28.6139&lon=77.2090', (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
            const parsed = JSON.parse(data);
            const yogas = parsed.yogas.filter(y => y.id.includes('neechbhanga'));
            console.log(JSON.stringify(yogas, null, 2));
        });
    });
}, 2000);
