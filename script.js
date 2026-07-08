// Dynamic content loading and interactions

document.addEventListener('DOMContentLoaded', () => {
    loadFacts();
    loadStatistics();
    loadDashboard();
});

// Load facts into the facts grid
function loadFacts() {
    const container = document.getElementById('factsContainer');
    container.innerHTML = '';
    
    factsData.forEach((fact, index) => {
        const card = document.createElement('div');
        card.className = 'fact-card';
        card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`;
        card.innerHTML = `
            <h3>${fact.title}</h3>
            <p>${fact.description}</p>
        `;
        container.appendChild(card);
    });
}

// Load statistics into the statistics grid
function loadStatistics() {
    const container = document.getElementById('statsContainer');
    container.innerHTML = '';
    
    statisticsData.forEach((stat, index) => {
        const card = document.createElement('div');
        card.className = 'stat-card';
        card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`;
        card.innerHTML = `
            <div class="stat-number">${stat.number}</div>
            <div class="stat-label">${stat.label}</div>
            <div class="stat-description">${stat.description}</div>
        `;
        container.appendChild(card);
    });
}

// Load dashboard data
function loadDashboard() {
    loadMarketSegments();
    loadGrowthDrivers();
    loadRegionalPerformance();
    loadConsumerTrends();
}

function loadMarketSegments() {
    const container = document.getElementById('segmentsContainer');
    container.innerHTML = '';
    
    marketSegments.forEach((segment, index) => {
        const item = document.createElement('div');
        item.className = 'dashboard-item';
        item.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`;
        item.innerHTML = `
            <div class="dashboard-item-value">${segment.value}</div>
            <div class="dashboard-item-label">${segment.name}</div>
        `;
        container.appendChild(item);
    });
}

function loadGrowthDrivers() {
    const container = document.getElementById('driversContainer');
    container.innerHTML = '';
    
    growthDrivers.forEach((driver, index) => {
        const item = document.createElement('div');
        item.className = 'dashboard-item';
        item.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`;
        item.innerHTML = `
            <div class="dashboard-item-value">${driver.driver}</div>
            <div class="dashboard-item-label">${driver.impact}</div>
        `;
        container.appendChild(item);
    });
}

function loadRegionalPerformance() {
    const container = document.getElementById('regionsContainer');
    container.innerHTML = '';
    
    regionalPerformance.forEach((region, index) => {
        const item = document.createElement('div');
        item.className = 'dashboard-item';
        item.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`;
        item.innerHTML = `
            <div class="dashboard-item-value">${region.region}</div>
            <div class="dashboard-item-label">${region.growth}</div>
        `;
        container.appendChild(item);
    });
}

function loadConsumerTrends() {
    const container = document.getElementById('trendsContainer');
    container.innerHTML = '';
    
    consumerTrends.forEach((trend, index) => {
        const item = document.createElement('div');
        item.className = 'dashboard-item';
        item.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`;
        item.innerHTML = `
            <div class="dashboard-item-value">${trend.trend}</div>
            <div class="dashboard-item-label">${trend.detail}</div>
        `;
        container.appendChild(item);
    });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Navigation link smooth scroll
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `fadeInUp 0.6s ease-out forwards`;
        }
    });
}, observerOptions);

// Observe all cards
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fact-card, .stat-card, .dashboard-card, .info-box').forEach(card => {
        observer.observe(card);
    });
});
