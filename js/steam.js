function fetchPlayerCount() {
    // Replace <YOUR_GAME_ID> with the AppID of the game you want to get the player count for
    const gameID = '1966720';
    const apiKey = '<CAB152343E38FB1592BA93D7CEAB68D9>';
    const url = `https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${gameID}&format=json&key=${apiKey}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        // Update the playerCount element with the retrieved player count
        document.getElementById('playerCount').innerText = `Current number of players: ${data.response.player_count}`;
    })
    .catch(error => {
        console.error('Error fetching player count:', error);
        document.getElementById('playerCount').innerText = 'Error fetching player count';
    });
}

// Call the fetchPlayerCount function when the page loads
window.onload = fetchPlayerCount;