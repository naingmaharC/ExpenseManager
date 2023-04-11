$(document).ready(function () {
    let url = window.location.pathname
    let token  = localStorage.getItem(TOKEN_KEY)
    let urlArray = url.split("/");
    if(token) {
       if(urlArray[urlArray.length-1] !== "dashboard.html") window.location = "dashboard.html"
    }
    else {
        if(urlArray[urlArray.length-1] && urlArray[urlArray.length-1] !== "index.html") window.location = "index.html"
    }
});