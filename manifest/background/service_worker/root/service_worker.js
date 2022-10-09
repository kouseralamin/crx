chrome.webRequest.onErrorOccurred.addListener(
    function (details) {
        chrome.notifications.create(
            Math.random().toString(),
            {
                type: "basic",
                iconUrl: "/blob/images/photo.jpg",
                title: details.error,
                message: details.initiator,
            });
    },
    { urls: ["<all_urls>"] }
);