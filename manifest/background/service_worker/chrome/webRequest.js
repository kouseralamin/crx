chrome.webRequest.onErrorOccurred.addListener(
    function (details) {
        chrome.notifications.create(
            "NOTIFICATIONS/webRequest/onErrorOccurred/" + new Date().toISOString() + "/" + Math.floor(Math.random() * 10000),
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
