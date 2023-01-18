const quotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(quotes => {
            document.getElementById('quote').innerText = quotes.quote;
        })
}