"use strict";

weather().then((value) => {
    toast("Weather: " + value, 10000)
})

time().then((value) => {
    toast(Math.abs(parseInt(value) - new Date().getTime()), 10000);
})

chrome.bookmarks.getTree(
    function (bookmarksTree) {
        bookmarksTree[0].children.forEach(element => {
            const bookmarksFolders = window.document.getElementById("bookmarks").getElementsByTagName("details")[0];
            const folder = window.document.createElement("details");
            const folderTitle = window.document.createElement("summary");
            const folderTitleText = window.document.createTextNode(element.title);
            folderTitle.appendChild(folderTitleText);
            folder.appendChild(folderTitle);
            const bookmarksInFolder = window.document.createElement("ul");
            folder.appendChild(bookmarksInFolder);
            element.children.forEach(element => {
                const bookmark = window.document.createElement("li");
                const bookmarkAnchor = window.document.createElement("a");
                const bookmarkTitle = window.document.createTextNode(element.title);
                bookmarkAnchor.appendChild(bookmarkTitle);
                bookmarkAnchor.href = element.url;
                bookmark.appendChild(bookmarkAnchor);
                bookmarksInFolder.appendChild(bookmark);
            });


            bookmarksFolders.appendChild(folder);
        });
    }
)