chrome.contextMenus.onClicked.addListener(
    function (details) {
        console.log(details);
    }
);

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "ALL",
        title: "TEST",
        contexts: ["all"]
    });
});