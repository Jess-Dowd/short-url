//// retrieves the url input, checking for correct protocal
function geturl() {
    var url = document.getElementById("urlinput").value;
    var protocol_ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://");
    if (!protocol_ok) {
        newurl = "http://" + url;
        return newurl;
    } else {
        return url;
    }
}

////generate a random variable 
function getrandom() {
    
    var text = "?#" + "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function genLink() {
    var result = document.getElementById("result");
    var newtext = getrandom()
    result.value = "https://jess-dowd.github.io/short-url/" + newtext;
}

// ////add variable to the enpoint url
// function genhash() {
//     if (window.location.hash == "") {
//         window.location.hash = getrandom();
//     }
// }

////send the input url data to the server and assign id
function send_request(url, hash) {
    this.url = url;
    this.hash = hash;
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            console.log(req.responseText, 'PUT API response');
            var data = (JSON.parse(req.responseText));
            console.log(data, 'PUT converted response ');
        };

    }
    req.open("PUT", "https://api.jsonbin.io/v3/b/61640e569548541c29c17f54", true);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("X-Master-Key", "$2b$10$awI5kl/9orunGmcpE2WBo.AjejhUK5Ml0nyHSKLm.tDWhwH30whUK");

    req.send(`{"longUrl":"${this.url}"}`);
}


////get long url, create small url, send data to server
function shorturl() {
    var longurl = geturl();
    genLink();
    send_request(longurl);
}

////if using the new short link it will retrieve the original link and redirect
if (window.location.hash != "") {
    console.log('test')

    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            console.log(req.responseText);
            var data = (JSON.parse(req.responseText)); 
            console.log(data.record.longUrl)
            window.location.href = data.record.longUrl;
        }
    };

    req.open("GET", "https://api.jsonbin.io/v3/b/61640e569548541c29c17f54", true);
    req.setRequestHeader("X-Master-Key", "$2b$10$awI5kl/9orunGmcpE2WBo.AjejhUK5Ml0nyHSKLm.tDWhwH30whUK");
    req.send();
}