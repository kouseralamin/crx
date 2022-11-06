window.addEventListener("load", function() {
    const node = window.document.createElement("div");
    node.id = "TOAST";
    window.document.body.appendChild(node);
})

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        sendResponse(true);
        if (sender.id === chrome.runtime.id && request[0] === "COPY_TO_CLIPBOARD") {
            window.navigator.clipboard.writeText(request[1]);
            toast("LINK: " + request[1], 5000);
        }
    }
);