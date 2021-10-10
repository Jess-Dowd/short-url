// var endpoint = "https://www.jsonstore.io/8ba4fd855086288421f770482e372ccb5a05d906269a34da5884f39eed0418a1";

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

function send_request(url) {
    this.url = url;
    var link = "https://api.jsonbin.io/v3/b";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", link);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("X-Master-key", "$2b$10$awI5kl/9orunGmcpE2WBo.AjejhUK5Ml0nyHSKLm.tDWhwH30whUK");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = JSON.stringify(this.url);

    xhr.send(data);

    // $.ajax({
    //     'url': 'https://api.jsonbin.io/v3/b',
    //     'type': 'POST',
    //     'data': JSON.stringify(this.url),
    //     'dataType': 'json',
    //     'contentType': 'application/json; charset=utf-8',
    //     'x-master-key': '$2b$10$awI5kl/9orunGmcpE2WBo.AjejhUK5Ml0nyHSKLm.tDWhwH30whUK'
    // })
}

function shorturl() {
    var longurl = geturl();
    genhash();
    send_request(longurl);
}

var hashh = window.location.hash.substr(1)

if (window.location.hash != "") {
    $.getJSON(endpoint + "/" + hashh, function (data) {
        data = data["result"];

        if (data != null) {
            window.location.href = data;
        }

    });
}




// var endpoint = "https://api.jsonbin.io/v3/b";
// var masterKey = "<$2b$10$awI5kl/9orunGmcpE2WBo.AjejhUK5Ml0nyHSKLm.tDWhwH30whUK>";
// var collectionId = "<6161a0689548541c29c0bb9c>";

// function geturl() {
//     var url = document.getElementById("urlinput").value;
//     var protocol_ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://");
//     if (!protocol_ok) {
//         newurl = "http://" + url;
//         return newurl;
//     } else {
//         return url;
//     }
// }

// function getrandom() {
//     var text = "";
//     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//     for (var i = 0; i < 5; i++)
//         text += possible.charAt(Math.floor(Math.random() * possible.length));
//     return text;
// }

// function genhash() {
//     if (window.location.hash == "") {
//         window.location.hash = getrandom();
//     }
// }

// function send_request(url) {
//     this.url = url;
//     $.ajax({
//         'url': endpoint,
//         'type': 'POST',
//         'data': JSON.stringify(this.url),
//         'dataType': 'json',
//         'contentType': 'application/json; charset=utf-8',
//         'X-Master-Key': masterKey,
//         'X-Collection-Id' : collectionId,
//         'X-Bin-Name' : window.location.hash.substr(1),
//         {success: function (data, status, xhr) {

//         } }
//     })
// }

// function send_request(url) {
//     this.url = url;
//     let req = new XMLHttpRequest();

//     req.onreadystatechange = () => {
//         if (req.readyState == XMLHttpRequest.DONE) {
//             console.log(req.responseText);
//         } else console.log("errorrr")
//     };

//     req.open("POST", "https://api.jsonbin.io/v3/b", true);
//     req.setRequestHeader("Content-Type", "application/json");
//     req.setRequestHeader("X-Master-Key", masterKey);
//     req.setRequestHeader("X-Collection-Id", "<6161a0689548541c29c0bb9c>");



//     req.send('{"sample": "Hello World"}');


    // let req = new XMLHttpRequest();

    // req.onreadystatechange = () => {
    //     if (req.readyState == XMLHttpRequest.DONE) {
    //         console.log(req.responseText);
    //     }
    // };

    // req.open("POST", "https://api.jsonbin.io/v3/b", true);
    // req.setRequestHeader("Content-Type", "application/json");
    // req.setRequestHeader("X-Master-Key", "$2b$10$awI5kl/9orunGmcpE2WBo.AjejhUK5Ml0nyHSKLm.tDWhwH30whUK");
//     // req.send( { "url": this.url } );
// }




// function shorturl() {
//     var longurl = geturl();
//     genhash();
//     // send_request(longurl);
//     let req = new XMLHttpRequest();

//     req.onreadystatechange = () => {
//         if (req.readyState == XMLHttpRequest.DONE) {
//             console.log(req.responseText);
//         } else console.log("errorrr2")
//     };

//     req.open("POST", "https://api.jsonbin.io/v3/b", true);
//     req.setRequestHeader("Content-Type", "application/json");
//     req.setRequestHeader("X-Master-Key", '$2b$10$awI5kl/9orunGmcpE2WBo.AjejhUK5Ml0nyHSKLm.tDWhwH30whUK');
//     req.setRequestHeader("X-Collection-Id", "6161a0689548541c29c0bb9c");



//     req.send('{"sample": "Hello World"}');
// }

// var hashh = window.location.hash.substr(1)


// // if (window.location.hash != "") {
// //     $.getJSON(endpoint + "/" + hashh, function (data) {
// //         data = data["result"];

// //         if (data != null) {
// //             window.location.href = data;
// //         }

// //     });
// // }


// if (window.location.hash != "") {

//     let req = new XMLHttpRequest();

//     req.onreadystatechange = () => {
//         if (req.readyState == XMLHttpRequest.DONE) {
//             console.log(req.responseText);
//         }
//     };

//     req.open("GET", "https://api.jsonbin.io/v3/b/<BIN_ID>/<BIN_VERSION | latest>", true);
//     req.setRequestHeader("X-Master-Key", masterKey);
//     req.send();



//     data = data["result"];
//     console.log(result)
//     if (data != null) {
//         window.location.href = data;
//     }


// }

