chrome.webRequest.onErrorOccurred.addListener(
    function (details) {
        const ID = "NOTIFICATIONS/webRequest/onErrorOccurred/" + new Date().toISOString() + "/" + Math.floor(Math.random() * 10000);
        chrome.notifications.create(
            ID,
            {
                type: "basic",
                iconUrl: "/blob/images/photo.jpg",
                title: (typeof details.error === "undefined") ? "net::ERROR" : details.error,
                message: (typeof details.initiator === "undefined") ? "net::ERROR" : details.initiator,
            }
        );
        setTimeout(function () { chrome.notifications.clear(ID); }, 5000);
    },
    { urls: ["<all_urls>"] }
);
