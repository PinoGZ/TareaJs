function setCookie(name, value, expires) {
    var date = new Date();
    date.setTime(date.getTime() + expires * 1000);
    document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
}

function getCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

function deleteCookie(name) {
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
}

function displayCookies() {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        console.log(cookies[i].trim());
    }
}

function saveData() {
    var language = document.getElementById("language").value;
    var theme = document.getElementById("theme").value;
    var user = document.getElementById("user").value;
    var preference = document.getElementById("preference").value;
    var lastVisit = new Date().toLocaleString();

    setCookie("language", language, 10);
    setCookie("theme", theme, 15);
    setCookie("user", user, 20);
    setCookie("preference", preference, -1);
    setCookie("lastVisit", lastVisit, -1);

    displayCookies();
}

window.onload = function() {
    setInterval(displayCookies, 2000);
}