chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        sendResponse(true);
        if (sender.id === chrome.runtime.id && request[0] === "COPY_TO_CLIPBOARD") {
            window.navigator.clipboard.writeText(request[1][0]);
        }
    }
);