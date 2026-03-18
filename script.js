// Tab switching logic
const tabs = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab') + '-tab';
        
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        
        tab.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Basic data structure
let tournament = {
    name: 'Unnamed Tournament',
    players: [],
    events: []
};

// Update header counts
function updateHeader() {
    document.getElementById('player-count').textContent = tournament.players.length + ' players';
    document.getElementById('event-count').textContent = tournament.events.length + ' events';
}

// Placeholder for adding players
document.getElementById('add-player-btn')?.addEventListener('click', () => {
    alert('Function to add player will be implemented here.');
    // Example: add a dummy player to show update
    tournament.players.push({ name: 'New Player', rating: 1000 });
    updateHeader();
});

// Placeholder for new event
document.getElementById('new-event-btn')?.addEventListener('click', () => {
    alert('Function to create new event will be implemented here.');
    tournament.events.push({ name: 'New Event', format: 'Round Robin' });
    updateHeader();
});

// Initialize
updateHeader();
