chrome.storage.local.get(["DATA"], function (data) {
    document.getElementsByTagName("body")[0].innerText = JSON.stringify(data);
});