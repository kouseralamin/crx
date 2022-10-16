chrome.contextMenus.onClicked.addListener(
    function (details) {
        if (details.menuItemId === "LINK") {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                const new307 = [Date.now().toString(), details.linkUrl.toString()];
                chrome.storage.local.get(["DATA"], function (data) {
                    data.DATA["307"].push(new307);
                    chrome.storage.local.set({ "DATA": data.DATA });
                });
                chrome.tabs.sendMessage(tabs[0].id, ["COPY_TO_CLIPBOARD", new307], function (response) {
                    console.log(response);
                })
            });
        }
    }
);

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "ALL",
        title: "ALL",
        contexts: ["all"]
    });
    chrome.contextMenus.create({
        id: "LINK",
        title: "COPY LINK",
        contexts: ["link"]
    });
});