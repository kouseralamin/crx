// TO CHECK STORAGE. DEBUG PURPOSE.

chrome.storage.local.get(null, function (items) {
    console.log(items);
});

chrome.storage.session.get(null, function (items) {
    console.log(items);
});

chrome.storage.sync.get(null, function (items) {
    console.log(items);
});
