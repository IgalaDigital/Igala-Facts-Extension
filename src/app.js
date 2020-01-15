let request = new XMLHttpRequest();

request.open("GET", "src/facts.json", true);
request.onload = () => {
    if(request.status>=200 && request.status<400) {
        let data = JSON.parse(request.responseText),
            random = Math.floor(Math.random() * data.length);

        document.getElementById('fact').innerHTML = data[random].fact;
        document.getElementById('publisher').innerHTML = data[random].publisher;
    }
};
request.onerror = () => {
    console.log("Something went wrong...")
}
request.send();
