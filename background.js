chrome.browserAction.onClicked.addListener(function (tab) {
    if (tab.url.indexOf("github.com/") != -1) {
        chrome.tabs.executeScript(tab.id, {
            "file": "main.js"
        }, function () {
            console.debug("Go release some code!");
        });
    }
});