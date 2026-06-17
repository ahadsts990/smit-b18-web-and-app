// js/app.js

function getVideoIdFromURL() {
    let params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
}
