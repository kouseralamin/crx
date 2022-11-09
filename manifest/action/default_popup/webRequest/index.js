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
            const webRequest = window.document.createElement("div");
            Object.keys(details).sort().forEach(element => {
                const webRequestInfo = window.document.createElement("div");
                const webRequestInfoText = window.document.createTextNode(`${element}: ${details[element].toString()}`);
                webRequestInfo.appendChild(webRequestInfoText);
                webRequest.appendChild(webRequestInfo);
            });
            window.document.body.appendChild(webRequest);
            window.scrollTo(0, document.body.scrollHeight);
        },
        { urls: ["<all_urls>"] }
    );
});