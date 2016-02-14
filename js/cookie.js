(function showCookieNoticeIfFirstVisit() {
    if(!userHasVisitedBefore()) {
        showCookieNotice();
        setUserHasVisitedBefore();
    }
})();

function userHasVisitedBefore() {
    var cookies = document.cookie.split(";");
    if(cookies.length < 1) {
        return false;
    }
    cookies = cookies.filter(function(cookie) {
        return cookie.trim().match(/^maerkelexCookieNoticeShown=/);
    });
    var cookie = cookies[0];
    return !!cookie;
}

function showCookieNotice() {
    document.querySelector("body").innerHTML += '<div class="cookieNotice">Vi bruger cookies for at forbedre bruger&#173;oplevelsen. Ved at bruge siden giver du dit samtykke til at vi samler anonym information om hvilke sider der besøges mest på siden.</div>';
}

function setUserHasVisitedBefore() {
    document.cookie = "maerkelexCookieNoticeShown=1";
}
