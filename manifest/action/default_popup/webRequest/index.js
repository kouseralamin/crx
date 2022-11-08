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
            console.log(details);
            const webRequest = window.document.createElement("div");
            webRequest.appendChild(window.document.createTextNode(event));
            Object.keys(details).forEach(element => {
                const webRequestInfo = window.document.createElement("div");
                const webRequestInfoText = window.document.createTextNode(`${element}: ${details[element].toString()}`);
                webRequestInfo.appendChild(webRequestInfoText);
                webRequest.appendChild(webRequestInfo);
            });
            details.event = event;
            window.document.body.appendChild(webRequest);
            EVENTS.push(details);
            console.log(EVENTS);
        },
        { urls: ["<all_urls>"] }
    );
});