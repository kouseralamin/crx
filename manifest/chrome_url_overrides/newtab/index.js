"use strict";

weather().then((value) => {
    toast("Weather: " + value, 10000)
})

time().then((value) => {
    toast(Math.abs(parseInt(value) - new Date().getTime()), 5000);
})

function toast(text, duration) {
    const toast = window.document.getElementById("TOAST");
    const node = window.document.createElement("span");
    const textnode = window.document.createTextNode(text);
    node.appendChild(textnode);
    node.classList.add("toastShow");
    toast.appendChild(node);
    setTimeout(() => {
        node.classList.remove("toastShow");
        node.classList.add("toastHide");
        setTimeout(() => {
            node.remove();
        }, 1000);
    }, duration);
}
