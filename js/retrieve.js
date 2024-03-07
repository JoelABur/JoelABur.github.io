document.addEventListener('DOMContentLoaded', () => {
    fetch('playerCount.json')
        .then(response => response.json())
        .then(data => {
            const playerCount = data.playerCount;
            document.getElementById('playerCount').textContent = `Current Number of Employees: ${playerCount}`;
        })
        .catch(error => {
            console.error('Error loading player count:', error);
        });
});
