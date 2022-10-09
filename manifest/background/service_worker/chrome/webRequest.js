chrome.webRequest.onErrorOccurred.addListener(
    function (details) {
        chrome.notifications.create(
            Math.random().toString(),
            {
                type: "basic",
                iconUrl: "/blob/images/photo.jpg",
                title: (typeof details.error === "undefined") ? "net::ERROR" : details.error,
                message: (typeof details.initiator === "undefined") ? "net::ERROR" : details.initiator,
            }
        );
    },
    { urls: ["<all_urls>"] }
);
