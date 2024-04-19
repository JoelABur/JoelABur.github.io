const fs = require('fs'); // If you're using Node.js for file system operations

const apiKey = '';
const appId = '1966720'; 

const apiUrl = `https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${appId}&key=${apiKey}`;

// Make an HTTP GET request to the Steam API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const playerCount = data.response.player_count;
        document.getElementById('playerCount').textContent = `Current Number of Employees: ${playerCount}`;
        
        // Save data to JSON file
        const jsonData = { playerCount: playerCount };
        const jsonContent = JSON.stringify(jsonData);
        fs.writeFileSync('playerCount.json', jsonContent);
    })
    .catch(error => {
        console.error('Error fetching player count:', error);
        document.getElementById('playerCount').textContent = 'Error fetching Employee count';
    });
