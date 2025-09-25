document.addEventListener('DOMContentLoaded', function () {
    // Array de experiências com a estrutura CORRETA, incluindo o 'description' como array de objetos
    const experiences = [
        { 
            year: 2022, 
            title: 'Digital Analytics | BI | Insights', 
            company: 'Bradesco', 
            period: 'Maio 2022 – Presente', 
            icon: 'fas fa-chart-pie', 
            color: 'success', 
            logo: 'https://adrianoarruda.github.io/assets/images/BBD.svg',
            description: [
                { text: 'Desenvolvimento de análises avançadas e visualizações em Power BI e Looker Studio.', icon: 'fas fa-chart-bar' },
                { text: 'Criação de estudos em Python (Databricks ) para integrar múltiplas fontes e acelerar o processo decisório.', icon: 'fab fa-python' },
                { text: 'Atuação como parceiro estratégico de áreas de negócio, conectando dados a decisões que otimizam a jornada do cliente.', icon: 'fas fa-hands-helping' }
            ]
        },
        { 
            year: 2021, 
            title: 'Digital Analytics', 
            company: 'MATH (Cliente: Santander)', 
            period: 'Maio 2021 – Abril 2022', 
            icon: 'fas fa-cogs', 
            color: 'danger', 
            logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQEIw5J4sKzXWQ/company-logo_100_100/company-logo_100_100/0/1729257705100/math_group_logo?e=1761782400&v=beta&t=bRWwbkN3EPBDL18Ncgy8ASsqN5EC9hK7sma2MtXEVgM',
            description: [
                { text: 'Automação de pipelines no Google Cloud Platform (BigQuery, Cloud Functions ).', icon: 'fas fa-cloud' },
                { text: 'Implementação de automações em Python para relatórios de performance, reduzindo tempo operacional.', icon: 'fas fa-robot' },
                { text: 'Estruturação de dashboards de custos para análise de ROI em campanhas.', icon: 'fas fa-dollar-sign' }
            ]
        },
        { 
            year: 2018, 
            title: 'Especialista CRO & Digital Analytics', 
            company: 'Jüssi', 
            period: 'Jul 2018 – Abr 2021', 
            icon: 'fas fa-search-dollar', 
            color: 'primary', 
            logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQGkoxsR0nMXbQ/company-logo_100_100/company-logo_100_100/0/1721223257729/agencia_jussi_logo?e=1761782400&v=beta&t=TiMB_wQEcf-mU4tb-KdSJtZl-xA0TsQF2lpg9lEvxuI', 
            clients: 'Clientes: O Boticário, Localiza, Diageo',
            description: [
                { text: 'Liderança em projetos de CRO para e-commerce, com ganho acumulado de 12% na taxa de conversão via testes A/B.', icon: 'fas fa-percent' },
                { text: 'Estruturação e implementação de Data Layer via GTM, aumentando a precisão da coleta de dados.', icon: 'fas fa-sitemap' },
                { text: 'Condução de estudos de comportamento do usuário (mapas de calor, vídeos de navegação ).', icon: 'fas fa-mouse-pointer' }
            ]
        },
        { 
            year: 2017, 
            title: 'Coordenador de Growth Marketing', 
            company: 'Catho Online', 
            period: 'Jan 2017 – Jul 2018', 
            icon: 'fas fa-rocket', 
            color: 'primary', 
            logo: 'https://media.licdn.com/dms/image/v2/C560BAQEwBxlz798aSw/company-logo_100_100/company-logo_100_100/0/1630640448418/catho_online_logo?e=1761782400&v=beta&t=M3ciK8hjukF-N8-u7dtnhMTEUNvS4daLvfdn4A94JlQ',
            description: [
                { text: 'Coordenação de equipe multidisciplinar (UX, Front-end, Back-end, SEO ) focada em Growth.', icon: 'fas fa-users-cog' },
                { text: 'Implementação de metodologias de experimentação para otimização de canais e aquisição.', icon: 'fas fa-vial' }
            ]
        },
        { 
            year: 2012, 
            title: 'Coordenador de Agência Interna', 
            company: 'Catho Online', 
            period: 'Set 2012 – Dez 2016', 
            icon: 'fas fa-briefcase', 
            color: 'primary', 
            logo: 'https://media.licdn.com/dms/image/v2/C560BAQEwBxlz798aSw/company-logo_100_100/company-logo_100_100/0/1630640448418/catho_online_logo?e=1761782400&v=beta&t=M3ciK8hjukF-N8-u7dtnhMTEUNvS4daLvfdn4A94JlQ' 
        },
        { 
            year: 2009, 
            title: 'Líder da Equipe de Desenvolvimento', 
            company: 'Catho Online', 
            period: 'Out 2009 – Ago 2012', 
            icon: 'fas fa-users', 
            color: 'primary', 
            logo: 'https://media.licdn.com/dms/image/v2/C560BAQEwBxlz798aSw/company-logo_100_100/company-logo_100_100/0/1630640448418/catho_online_logo?e=1761782400&v=beta&t=M3ciK8hjukF-N8-u7dtnhMTEUNvS4daLvfdn4A94JlQ' 
        },
        { 
            year: 2006, 
            title: 'Web designer - Front-End', 
            company: 'Catho Online', 
            period: 'Nov 2006 – Set 2009', 
            icon: 'fas fa-code', 
            color: 'primary', 
            logo: 'https://media.licdn.com/dms/image/v2/C560BAQEwBxlz798aSw/company-logo_100_100/company-logo_100_100/0/1630640448418/catho_online_logo?e=1761782400&v=beta&t=M3ciK8hjukF-N8-u7dtnhMTEUNvS4daLvfdn4A94JlQ' 
        }
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

    // FUNÇÃO RENDERTIMELINE CORRIGIDA
    function renderTimeline(containerId, data) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = '';
        data.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('list-item');
            
            let descriptionHTML = '';
            if (item.description && item.description.length > 0) {
                // CORREÇÃO: usa desc.icon e desc.text
                const itemsHTML = item.description.map(desc => `<li><i class="${desc.icon}"></i>${desc.text}</li>`).join('');
                descriptionHTML = `<ul class="list-item-description">${itemsHTML}</ul>`;
            }

            const clientsHTML = item.clients ? `<p class="list-item-clients">${item.clients}</p>` : '';

            div.innerHTML = `
                <div class="list-item-logo">
                    <img src="${item.logo}" alt="Logo ${item.company}">
                </div>
                <div class="list-item-info">
                    <h5>${item.title}</h5>
                    <p>${item.company}</p>
                    ${clientsHTML}
                    ${descriptionHTML}
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

    function renderExperienceSummary(containerId, data) {
        const container = document.getElementById(containerId);
        if (!container) return;
        const summaryData = data.slice(0, 3);
        container.innerHTML = '';
        summaryData.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('list-item');
            div.innerHTML = `
                <div class="list-item-logo">
                    <img src="${item.logo}" alt="Logo ${item.company}">
                </div>
                <div class="list-item-info">
                    <h5>${item.title}</h5>
                    <p>${item.company}</p>
                </div>
            `;
            container.appendChild(div);
        });
    }

    function renderSkillsSummary(containerId, data) {
        const container = document.getElementById(containerId);
        if (!container) return;
        const latestData = data[2024];
        container.innerHTML = '';
        data.labels.forEach((label, index) => {
            const skillValue = latestData[index];
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
    }

    // --- LÓGICA DO FILTRO DE EXPERIÊNCIA ---
    const startYearSlider = document.getElementById('start-year');
    const endYearSlider = document.getElementById('end-year');
    const startYearLabel = document.getElementById('start-year-label');
    const endYearLabel = document.getElementById('end-year-label');

    function filterAndRenderTimeline() {
        if (!startYearSlider || !endYearSlider) {
            renderTimeline('timeline-container', experiences);
            return;
        }

        let startYear = parseInt(startYearSlider.value);
        let endYear = parseInt(endYearSlider.value);

        if (startYear > endYear) {
            [startYear, endYear] = [endYear, startYear];
            startYearSlider.value = startYear;
            endYearSlider.value = endYear;
        }

        startYearLabel.textContent = startYear;
        endYearLabel.textContent = endYear;

        const filteredExperiences = experiences.filter(exp => exp.year >= startYear && exp.year <= endYear);
        renderTimeline('timeline-container', filteredExperiences);
    }

    if (startYearSlider && endYearSlider) {
        startYearSlider.addEventListener('input', filterAndRenderTimeline);
        endYearSlider.addEventListener('input', filterAndRenderTimeline);
    }

    // --- CHAMADA FINAL DAS FUNÇÕES ---
    filterAndRenderTimeline();
    renderSkillBars('skills-chart-container', 'year-slider');
    renderList('education-container', education);
    renderList('certifications-container', certifications);
    renderExperienceSummary('experience-summary-container', experiences);
    renderSkillsSummary('skills-summary-container', skillEvolution);
});
