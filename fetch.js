fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
    "method": 'GET',
    "headers": {
        "X-RapidAPI-Key": "",
        "X-RapidAPI-Host": "quotes15.p.rapidapi.com"
    }
})
.then(response => response.json())
.then(response => {
    const quoteElement = document.getElementById("quotePlaceholder");
    quoteElement.textContent = response.content;
})
.catch(err => {
    console.log(err);
});