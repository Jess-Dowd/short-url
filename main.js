// var endpoint = "https://ef45989b94af8fb790427960f84d98ea.m.pipedream.net";

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

function getrandom() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function genhash() {
    if (window.location.hash == "") {
        window.location.hash = getrandom();
    }
}

// function send_request(url) {
//     this.url = url;
//     $.ajax({
//         'url': endpoint + "/" + window.location.hash.substr(1),
//         'type': 'POST',
//         'data': JSON.stringify(this.url),
//         'dataType': 'json',
//         'contentType': 'application/json; charset=utf-8',
//         'X-Master-Key': '$2b$10$awI5kl/9orunGmcpE2WBo.AjejhUK5Ml0nyHSKLm.tDWhwH30whUK'
//     })
// }

function send_request(url) {
    this.url = url;
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            console.log(req.responseText);
        }
    };

    req.open("POST", "https://api.jsonbin.io/v3/b", true);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("X-Master-Key", "$2b$10$awI5kl/9orunGmcpE2WBo.AjejhUK5Ml0nyHSKLm.tDWhwH30whUK");
    req.send(JSON.stringify(this.url));
}




function shorturl() {
    var longurl = geturl();
    genhash();
    send_request(longurl);
}

var hashh = window.location.hash.substr(1)

// if (window.location.hash != "") {
//     $.getJSON(endpoint + "/" + hashh, function (data) {
//         data = data["result"];

//         if (data != null) {
//             window.location.href = data;
//         }

//     });
// }


if (window.location.hash != "") {

    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            console.log(req.responseText);
        }
    };

    req.open("GET", "https://api.jsonbin.io/v3/b/<BIN_ID>/<BIN_VERSION | latest>", true);
    req.setRequestHeader("X-Master-Key", "$2b$10$awI5kl/9orunGmcpE2WBo.AjejhUK5Ml0nyHSKLm.tDWhwH30whUK");
    req.send();



    data = data["result"];

    if (data != null) {
        window.location.href = data;
    }


}

