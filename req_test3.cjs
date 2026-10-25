const http = require('http');

const data = JSON.stringify({
  date: '-5114-01-10',
  time: '12:00',
  lat: 26.7922,
  lng: 82.1998,
  patra: 'struggling_hustler'
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/calculate',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, res => {
  let d = '';
  res.on('data', chunk => {
    d += chunk;
  });
  res.on('end', () => {
     console.log(d.substring(0, 100));
  });
});

req.on('error', error => {
  console.error(error);
});

req.write(data);
req.end();
