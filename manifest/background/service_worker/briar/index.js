const briar = {
    sendMessage(text) {
        fetch(`http://127.0.0.1:${SECRET.briar.port}/v1/messages/1`, {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + SECRET.briar.token
            },
            body: JSON.stringify(
                {
                    "text": text
                }
            )
        })
    },
    webSocket() {
        const briarWebSocket = new WebSocket(`ws://127.0.0.1:${SECRET.briar.port}/v1/ws`);
        briarWebSocket.onopen = function (_event) {
            briarWebSocket.send(SECRET.briar.token);
        };
        briarWebSocket.onmessage = async function (event) {
            if (
                event.type === "message" &&
                JSON.parse(event.data).name === "ConversationMessageReceivedEvent" &&
                JSON.parse(event.data).data.contactId === SECRET.briar.contactId &&
                JSON.parse(event.data).data.type === "PrivateMessage"
            ) {
                briar.sendMessage("NOTIFIED: " + JSON.parse(event.data).data.text);
                chrome.notifications.clear("BRIAR_NOTIFICATION");
                chrome.storage.local.set({ "BRIAR_NOTIFICATION_MESSAGE": JSON.parse(event.data).data.text });
                chrome.notifications.create(
                    "BRIAR_NOTIFICATION",
                    {
                        type: "basic",
                        iconUrl: "/blob/images/photo.jpg",
                        title: "AAKS",
                        message: JSON.parse(event.data).data.text,
                    }
                )
            }
        };
    }
}

briar.webSocket();
