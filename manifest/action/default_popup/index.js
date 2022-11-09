window.document.getElementById("webRequest").onclick = function () {
    window.open("./webRequest/index.html", "_blank", "width=500,height=500");
}

window.document.getElementById("openInWindow").onclick = function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        window.open(tabs[0]["url"], "_blank", "width=500,height=500");
    });
}

window.document.getElementById("dictionary").onclick = function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        window.open("./dictionary/index.html", "_blank", "width=500,height=500");
    });
}