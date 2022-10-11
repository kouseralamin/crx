chrome.alarms.clearAll();

chrome.alarms.create("clear_storage", {
    delayInMinutes: 0,
    periodInMinutes: 0.20
});

chrome.alarms.onAlarm.addListener(function (alarm) {
    if (alarm.name === "clear_storage") {
        chrome.downloads.search({}, function (downloads) {
            downloads.forEach(download => {
                if (download.state !== "in_progress") {
                    chrome.storage.local.remove(["DOWNLOAD" + download.id])
                }
            });
        });
    }
});
