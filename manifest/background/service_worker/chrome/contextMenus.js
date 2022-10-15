chrome.contextMenus.onClicked.addListener(
    function (details) {
        if (details.menuItemId === "LINK") {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, ["COPY_TO_CLIPBOARD", SECRET.origin + "/r/" + btoa(details.linkUrl)], function (response) {
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