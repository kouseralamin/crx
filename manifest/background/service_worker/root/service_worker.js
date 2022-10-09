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

chrome.downloads.onChanged.addListener(
    function (details) {
        if (typeof details.state !== "undefined" && details.state.current === "complete") {
            chrome.notifications.create(
                Math.random().toString(),
                {
                    type: "basic",
                    iconUrl: "/blob/images/photo.jpg",
                    title: "DOWNLOAD STATUS",
                    message: "A FILE DOWNLOADED"
                }
            )
        }
    },
);