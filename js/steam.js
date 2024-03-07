const apiKey = 'CAB152343E38FB1592BA93D7CEAB68D9';
const appId = '1966720'; 

const apiUrl = `https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${appId}&key=${apiKey}`;

// Make an HTTP GET request to the Steam API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const playerCount = data.response.player_count;
        document.getElementById('playerCount').textContent = `Current Number of Employees: ${playerCount}`;
    })
    .catch(error => {
        console.error('Error fetching player count:', error);
        document.getElementById('playerCount').textContent = 'Error fetching Employee count';
    });