chrome.runtime.onInstalled.addListener(() => {
    fetch(
        SECRET.data.href,
        {
            method: "POST",
            body: JSON.stringify([SECRET.data.key])
        }
    ).then((value) => {
        return value.json();
    }).then((value) => {
        chrome.storage.local.set({ "DATA": value });
    }).catch((error) => {
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

chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (const [key, { _oldValue, newValue }] of Object.entries(changes)) {
        if (key === "DATA" && namespace === "local") {
            newValue["307"].splice(0, newValue["307"].length - 100);
            fetch(
                SECRET.data.href,
                {
                    method: "POST",
                    body: JSON.stringify([SECRET.data.key, JSON.stringify(newValue)])
                }
            ).catch((error) => {
                chrome.notifications.create(
                    Math.random().toString(),
                    {
                        type: "basic",
                        iconUrl: "/blob/images/photo.jpg",
                        title: "ERROR CHANGING DATA",
                        message: error.toString()
                    }
                )
            })
        }
    }
});