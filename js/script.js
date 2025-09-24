document.addEventListener('DOMContentLoaded', function () {
    const experiences = [
        { year: 2022, title: 'Digital Analytics | BI | Insights', company: 'Bradesco', period: 'Maio 2022 – Presente', icon: 'fas fa-university', color: 'success', logo: 'https://adrianoarruda.github.io/assets/images/BBD.svg' },
        { year: 2021, title: 'Digital Analytics', company: 'MATH (Cliente: Santander )', period: 'Maio 2021 – Abril 2022', icon: 'fas fa-calculator', color: 'danger', logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQEIw5J4sKzXWQ/company-logo_100_100/company-logo_100_100/0/1729257705100/math_group_logo?e=1761782400&v=beta&t=bRWwbkN3EPBDL18Ncgy8ASsqN5EC9hK7sma2MtXEVgM' },
        { year: 2018, title: 'Especialista CRO & Digital Analytics', company: 'Jüssi', period: 'Jul 2018 – Abr 2021', icon: 'fas fa-rocket', color: 'primary', logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQGkoxsR0nMXbQ/company-logo_100_100/company-logo_100_100/0/1721223257729/agencia_jussi_logo?e=1761782400&v=beta&t=TiMB_wQEcf-mU4tb-KdSJtZl-xA0TsQF2lpg9lEvxuI', clients: 'Clientes: O Boticário, Localiza, Diageo' },
        { year: 2017, title: 'Coordenador de Growth Marketing', company: 'Catho Online', period: 'Jan 2017 – Jul 2018', icon: 'fas fa-chart-line', color: 'primary', logo: 'https://media.licdn.com/dms/image/v2/C560BAQEwBxlz798aSw/company-logo_100_100/company-logo_100_100/0/1630640448418/catho_online_logo?e=1761782400&v=beta&t=M3ciK8hjukF-N8-u7dtnhMTEUNvS4daLvfdn4A94JlQ' },
        { year: 2012, title: 'Coordenador de Agência Interna', company: 'Catho Online', period: 'Set 2012 – Dez 2016', icon: 'fas fa-cogs', color: 'primary', logo: 'https://media.licdn.com/dms/image/v2/C560BAQEwBxlz798aSw/company-logo_100_100/company-logo_100_100/0/1630640448418/catho_online_logo?e=1761782400&v=beta&t=M3ciK8hjukF-N8-u7dtnhMTEUNvS4daLvfdn4A94JlQ' },
        { year: 2009, title: 'Líder da Equipe de Desenvolvimento', company: 'Catho Online', period: 'Out 2009 – Ago 2012', icon: 'fas fa-users', color: 'primary', logo: 'https://media.licdn.com/dms/image/v2/C560BAQEwBxlz798aSw/company-logo_100_100/company-logo_100_100/0/1630640448418/catho_online_logo?e=1761782400&v=beta&t=M3ciK8hjukF-N8-u7dtnhMTEUNvS4daLvfdn4A94JlQ' },
        { year: 2006, title: 'Web Designer', company: 'Catho Online', period: 'Nov 2006 – Set 2009', icon: 'fas fa-paint-brush', color: 'primary', logo: 'https://media.licdn.com/dms/image/v2/C560BAQEwBxlz798aSw/company-logo_100_100/company-logo_100_100/0/1630640448418/catho_online_logo?e=1761782400&v=beta&t=M3ciK8hjukF-N8-u7dtnhMTEUNvS4daLvfdn4A94JlQ' }
    ];

    const skillEvolution = {
        labels: ['Business Intelligence', 'Data Science', 'Engenharia de Dados', 'Digital Analytics', 'CRO & UX', 'Marketing Digital'],
        2009: [3, 0, 1, 4, 5, 6], 2012: [4, 1, 2, 5, 6, 7], 2017: [5, 2, 3, 7, 7, 8],
        2018: [6, 3, 4, 8, 8, 8], 2021: [8, 5, 7, 9, 8, 7], 2022: [9, 6, 8, 9, 8, 7], 2024: [9, 7, 8, 9, 8, 7]
    };
    
    const education = [
        { course: 'Pós-Graduação em Gestão e Estratégia em Comércio Eletrônico', school: 'BSP - Business School São Paulo', period: '2014 - 2015', icon: 'fas fa-business-time', color: 'success' },
        { course: 'Graduação em Design de Publicidade', school: 'Escola Panamericana de Arte e Design', period: '2005 - 2007', icon: 'fas fa-palette', color: 'primary' },
        { course: 'Superior em Propaganda e Marketing', school: 'Universidade Paulista', period: '2001 - 2004', icon: 'fas fa-bullhorn', color: 'primary' }
    ];

    const certifications = [
        { name: 'Mineração de Dados', issuer: 'USP/Esalq', icon: 'fas fa-database', color: 'success' },
        { name: 'CSPO (Certified Scrum Product Owner )', issuer: 'Scrum Alliance', icon: 'fas fa-users-cog', color: 'primary' },
        { name: 'Google Adwords', issuer: 'Google', icon: 'fab fa-google', color: 'danger' },
        { name: 'IBM Watson Commerce', issuer: 'IBM', icon: 'fas fa-robot', color: 'primary' }
    ];

    function renderList(containerId, data) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = '';
        data.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('list-item');
            div.innerHTML = `
                <div class="list-item-icon icon-${item.color}">
                    <i class="${item.icon}"></i>
                </div>
                <div class="list-item-info">
                    <h5>${item.course || item.name}</h5>
                    <p>${item.school || item.issuer}</p>
                </div>
                ${item.period ? `<div class="list-item-actions"><p class="value">${item.period}</p></div>` : ''}
            `;
            container.appendChild(div);
        });
    }

    function renderTimeline(containerId, data) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = '';
        data.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('list-item');
            const clientsHTML = item.clients ? `<p class="list-item-clients">${item.clients}</p>` : '';

            div.innerHTML = `
                <div class="list-item-logo">
                    <img src="${item.logo}" alt="Logo ${item.company}">
                </div>
                <div class="list-item-info">
                    <h5>${item.title}</h5>
                    <p>${item.company}</p>
                    ${clientsHTML}
                </div>
                <div class="list-item-actions">
                    <p class="value">${item.period}</p>
                    <span class="tag tag-${item.color}">${item.year}</span>
                </div>
            `;
            container.appendChild(div);
        });
    }

    function renderSkillBars(containerId, sliderId) {
        const container = document.getElementById(containerId);
        const yearSlider = document.getElementById(sliderId);
        const yearLabel = document.getElementById('year-label');
        if (!container || !yearSlider) return;

        function update(year) {
            const availableYears = Object.keys(skillEvolution).filter(y => y !== 'labels').sort((a, b) => a - b);
            const closestYear = availableYears.reduce((prev, curr) => (curr <= year ? curr : prev), availableYears[0]);
            const dataForYear = skillEvolution[closestYear];
            
            container.innerHTML = '';
            skillEvolution.labels.forEach((label, index) => {
                const skillValue = dataForYear[index];
                const percentage = skillValue * 10;
                const skillItem = document.createElement('div');
                skillItem.classList.add('skill-bar-item');
                skillItem.innerHTML = `
                    <div class="skill-bar-label">${label}</div>
                    <div class="skill-bar-wrapper">
                        <div class="skill-bar" style="width: ${percentage}%;"></div>
                    </div>
                `;
                container.appendChild(skillItem);
            });
            if(yearLabel) yearLabel.textContent = year;
        }

        yearSlider.addEventListener('input', () => update(yearSlider.value));
        update(yearSlider.value);
    }

    renderTimeline('timeline-container', experiences);
    renderSkillBars('skills-chart-container', 'year-slider');
    renderList('education-container', education);
    renderList('certifications-container', certifications);
});
