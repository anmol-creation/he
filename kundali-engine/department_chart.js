const departmentMap = {
    1: "Head Office (Self)",
    2: "Finance Dept (Wealth)",
    3: "Comm Dept (Courage)",
    4: "Real Estate (Home)",
    5: "R&D Dept (Intellect)",
    6: "HR & Disputes (Debt)",
    7: "Partnership (Marriage)",
    8: "Audit & Risk (Secrets)",
    9: "Legal & Ethics (Dharma)",
    10: "Operations (Career)",
    11: "Revenue Dept (Gains)",
    12: "Exports/Loss (Moksha)"
};

const vedicTitles = {
    1: "Lagnesh", 2: "Dhanesh", 3: "Parakramesh", 4: "Sukhesh",
    5: "Panchamesh", 6: "Shashthesh", 7: "Saptamesh", 8: "Ashtamesh",
    9: "Bhagyesh", 10: "Karmesh", 11: "Labhesh", 12: "Vyayesh"
};

export class DepartmentChartRenderer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.chartData = null;
    }

    updateData(data) {
        this.chartData = data;
        this.render();
    }

    render() {
        if (!this.container || !this.chartData) return;

        let html = '<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 20px;">';

        for (let i = 1; i <= 12; i++) {
            const hNum = i; // House Number
            const deptName = vedicTitles[hNum] + " Office";

            html += `<div style="border: 1px solid var(--vault-accent); padding: 10px; border-radius: 6px; background: rgba(0,0,0,0.4);">`;
            html += `<h4 style="margin: 0 0 10px 0; color: var(--vault-accent); font-size: 14px; border-bottom: 1px dashed var(--vault-border); padding-bottom: 5px;">H${hNum}: ${deptName}</h4>`;

            const housePlanets = this.chartData.planets.filter(p => p.house === hNum);

            if (housePlanets.length > 0) {
                housePlanets.forEach(p => {
                    // Collect lordships from backend
                    let lordships = [];
                    if (p.lordships) {
                        lordships = p.lordships;
                    }

                    let rolesStr = '';
                    if (lordships.length > 0) {
                        rolesStr = ` <span style="font-size: 10px; color: var(--vault-text-muted);">(${lordships.join(', ')})</span>`;
                    }

                    html += `<div style="margin-bottom: 5px; font-size: 13px;">${p.name}${rolesStr}</div>`;
                });
            } else {
                html += `<div style="color: #666; font-size: 12px; font-style: italic;">Empty</div>`;
            }

            html += `</div>`;
        }

        html += '</div>';

        this.container.innerHTML = html;
    }
}
