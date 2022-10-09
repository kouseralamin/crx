chrome.webRequest.onErrorOccurred.addListener(
    function (details) {
        chrome.notifications.create(
            Math.random().toString(),
            {
                type: "basic",
                iconUrl: "/blob/images/512.png",
                title: details.error,
                message: details.initiator,
            });
    },
    { urls: ["<all_urls>"] }
);