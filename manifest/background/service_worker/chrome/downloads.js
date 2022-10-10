chrome.downloads.onChanged.addListener(
    function (details) {
        if (typeof details.filename !== "undefined" && typeof details.filename.current === "string") {
            console.log("INSERT");
            chrome.storage.local.set({ ["DOWNLOADS" + details.id.toString()]: { filename: details.filename.current } });
        }
        if (typeof details.state !== "undefined" && details.state.current === "complete") {
            chrome.storage.local.get(["DOWNLOADS" + details.id.toString()], (value) => {
                chrome.downloads.getFileIcon(
                    details.id,
                    (iconUrl) => {
                        chrome.notifications.create(
                            Math.random().toString(),
                            {
                                type: "basic",
                                iconUrl: iconUrl,
                                title: "DOWNLOAD COMPLETED",
                                message: value["DOWNLOADS" + details.id.toString()]["filename"]
                            }
                        )
                    }
                );
            });
        }
    },
);

chrome.downloads.onDeterminingFilename.addListener(
    function (details) {
        // EMPTY onDeterminingFilename
    },
);

chrome.downloads.onCreated.addListener(
    function (sdetails) {
        // EMPTY onCreated
    },
);

chrome.downloads.onErased.addListener(
    function (details) {
        chrome.storage.local.remove(["DOWNLOADS" + details.id.toString()])
    },
)
