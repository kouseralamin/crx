chrome.runtime.onInstalled.addListener(() => {
    fetch(
        SECRET.data.href,
        {
            method: "POST",
            body: JSON.stringify([SECRET.data.key])
        }
    ).then((value) => {
        return value.text();
    }).then((value) => {
        chrome.storage.local.set({ "DATA": value });
        chrome.storage.local.get("DATA", (value) => {
            console.log(value);
        })
    }).catch((error) => {
        console.log(error);
        chrome.notifications.create(
            Math.random().toString(),
            {
                type: "basic",
                iconUrl: "/blob/images/photo.jpg",
                title: "ERROR LOADING CHROME EXTENSION",
                message: error.toString()
            }
        )
    })
});