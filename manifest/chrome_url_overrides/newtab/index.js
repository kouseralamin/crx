"use strict";

weather().then((value) => {
    toast("Weather: " + value, 10000)
})

time().then((value) => {
    toast(Math.abs(parseInt(value) - new Date().getTime()), 10000);
})

chrome.bookmarks.getTree(
    function (bookmarksTree) {
        const bookmarksFolders = window.document.getElementById("bookmarks").getElementsByTagName("details")[0];
        bookmarksTree[0].children.forEach(element => {
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

chrome.topSites.get(
    function (topSites) {
        const topSitesNode = window.document.getElementById("topSites").getElementsByTagName("details")[0].getElementsByTagName("ul")[0];
        topSites.forEach(element => {
            const topSite = window.document.createElement("li");
            const topSiteAnchor = window.document.createElement("a");
            const topSiteTitle = window.document.createTextNode(element.title);
            topSiteAnchor.appendChild(topSiteTitle);
            topSiteAnchor.href = element.url;
            topSite.appendChild(topSiteAnchor);
            topSitesNode.appendChild(topSite);
        });
    }
)