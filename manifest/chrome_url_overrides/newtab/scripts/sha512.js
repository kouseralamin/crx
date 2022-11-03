async function sha512(message) {
    return await crypto.subtle.digest("SHA-512", new TextEncoder().encode(message)).then((value) => {
        return Array.from(new Uint8Array(value)).map((b) => b.toString(16).padStart(2, "0")).join("");
    })
}