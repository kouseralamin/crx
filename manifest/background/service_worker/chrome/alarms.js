chrome.alarms.clearAll();

chrome.alarms.create("ONE_MINUTE", {
    delayInMinutes: 0,
    periodInMinutes: 1
});

chrome.alarms.onAlarm.addListener(function (alarm) {
    if (alarm.name === "ONE_MINUTE") {
        chrome.downloads.search({}, function (downloads) {
            downloads.forEach(download => {
                if (download.state !== "in_progress") {
                    chrome.storage.local.remove(["DOWNLOAD" + download.id])
                }
            });
        });
    }
});
