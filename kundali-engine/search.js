document.getElementById('searchBtn').addEventListener('click', async () => {
    const startYear = parseInt(document.getElementById('startYear').value);
    const endYear = parseInt(document.getElementById('endYear').value);
    const targetTithi = document.getElementById('tithiSelect').value;
    const resultBox = document.getElementById('resultBox');

    if (startYear >= endYear) {
        alert("Start Year must be less than End Year.");
        return;
    }

    if (endYear - startYear > 500) {
        alert("Please keep the search range under 500 years to avoid server timeout during this prototype phase.");
        return;
    }

    resultBox.style.display = 'block';
    resultBox.textContent = `Searching celestial events between ${startYear} and ${endYear}...\nThis may take a few seconds...`;

    try {
        const response = await fetch('http://localhost:3000/api/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ startYear, endYear, targetTithi })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        let output = `Historical Search Results (${startYear} to ${endYear})\n`;
        output += `Target: ${targetTithi === 'any' ? 'Planetary alignments only' : `Tithi ${targetTithi}`}\n`;
        output += `------------------------------------------------------\n`;

        if (data.results.length === 0) {
            output += `No matches found in this timeframe.\n`;
        } else {
            data.results.forEach(res => {
                let dateStr = "";
                // Handle BCE dates
                if (res.year < 0) {
                    dateStr = `${Math.abs(res.year)} BCE, Month: ${res.month}, Day: ${res.day}`;
                } else {
                    dateStr = `${res.year} CE, Month: ${res.month}, Day: ${res.day}`;
                }
                output += `Match Found: ${dateStr}\n`;
                if (res.tithi) {
                    output += `  Tithi: ${res.tithi.name}\n`;
                }
                output += `------------------------------------------------------\n`;
            });
            output += `\nTotal matches: ${data.results.length}\n`;
        }

        resultBox.textContent = output;

    } catch (error) {
        resultBox.textContent = `Error: ${error.message}`;
    }
});