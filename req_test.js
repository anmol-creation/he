async function test() {
    const response = await fetch('http://localhost:3000/api/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date: '1999-12-22', time: '20:45', lat: 28.63, lng: 79.80 })
    });
    const data = await response.json();
    console.log("Ascendant Value:", data.ascendant);
}
test();
