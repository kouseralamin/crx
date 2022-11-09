"use strict";

const EVENTS = [];
[
    "onBeforeRequest",
    "onBeforeSendHeaders",
    "onSendHeaders",
    "onHeadersReceived",
    "onAuthRequired",
    "onBeforeRedirect",
    "onResponseStarted",
    "onCompleted",
    "onErrorOccurred"
].forEach(event => {
    chrome.webRequest[event].addListener(
        function (details) {
            details.event = event;
            EVENTS.push(details);
            const webRequest = window.document.createElement("div");
            Object.keys(details).sort().forEach(element => {
                const webRequestInfo = window.document.createElement("div");
                const webRequestInfoText = window.document.createTextNode(`${element}: ${details[element].toString()}`);
                webRequestInfo.appendChild(webRequestInfoText);
                webRequest.appendChild(webRequestInfo);
            });
            window.document.getElementById("events").appendChild(webRequest);
            window.scrollTo(0, document.body.scrollHeight);
        },
        { urls: ["<all_urls>"] }
    );
});

window.document.getElementById("download").onclick = function () {
    const blob = new Blob([JSON.stringify(EVENTS)], { type: "application/json" });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = "webRequest.json";
    link.click();
}