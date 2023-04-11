$(document).ready(function () {
    let url = window.location.pathname
    let token  = localStorage.getItem(TOKEN_KEY)
    if(token) window.location = "dashboard.html"
    else {
        let urlArray = url.split("/");
        if(urlArray[urlArray.length-1] && urlArray[urlArray.length-1] !== "index.html") window.location = "index.html"
    }
});