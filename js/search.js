// Get the search input element
const searchInput = document.querySelector('.search-input');

// Function to handle search
function handleSearch() {
    const searchQuery = searchInput.value.toLowerCase(); // Get search query and convert to lowercase

    // Define a mapping of search terms to corresponding URLs
    const searchTermsToUrls = {
        'jobs': 'Job_info.html',
        'home': 'index.html',
        'about us': "About_us.html",
        'jobs info': 'Job_info.html',
        'home page': 'index.html',
        'about': "About_us.html",
        'apply':'Apply.html',
        'application':'Apply.html',
        'test':'test.html'
        // Add more search terms and their corresponding URLs here
    };

    // Check if the search query matches any predefined search terms
    if (searchQuery in searchTermsToUrls) {
        // If there's a match, redirect to the corresponding URL
        window.location.href = searchTermsToUrls[searchQuery];
    } else {
        // If there's no match, do nothing (you could also display a message to the user)
        console.log('No matching page found for search query:', searchQuery);
    }
}

// Event listener for input change event
searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});
