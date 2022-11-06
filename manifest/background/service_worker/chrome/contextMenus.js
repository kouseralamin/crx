chrome.contextMenus.onClicked.addListener(
    function (details) {
        if (details.menuItemId === "LINK") {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                const new307 = [Date.now().toString(), details.linkUrl.toString()];
                chrome.storage.local.get(["DATA"], function (data) {
                    data.DATA["307"].push(new307);
                    data.DATA["307"].splice(0, data.DATA["307"].length - 100);
                    chrome.storage.local.set({ "DATA": data.DATA });
                });
                chrome.tabs.sendMessage(tabs[0].id, ["COPY_TO_CLIPBOARD", SECRET.origin + "/r/" + new307[0]], function (response) {
                    console.log(response);
                })
            });
        }
        if (details.menuItemId === "PAGE") {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                const new307 = [Date.now().toString(), details.pageUrl.toString()];
                chrome.storage.local.get(["DATA"], function (data) {
                    data.DATA["307"].push(new307);
                    data.DATA["307"].splice(0, data.DATA["307"].length - 100);
                    chrome.storage.local.set({ "DATA": data.DATA });
                });
                chrome.tabs.sendMessage(tabs[0].id, ["COPY_TO_CLIPBOARD", SECRET.origin + "/r/" + new307[0]], function (response) {
                    console.log(response);
                })
            });
        }
    }
);

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "PAGE",
        title: "COPY PAGE URL",
        contexts: ["page"],
        documentUrlPatterns: ["https://*/*", "http://*/*"]
    });
    chrome.contextMenus.create({
        id: "LINK",
        title: "COPY URL",
        contexts: ["link"],
        documentUrlPatterns: ["https://*/*", "http://*/*"]
    });
});