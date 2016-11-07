var description = '';

function extractPullRequestDescription() {
	return document.querySelectorAll('#partial-discussion-header .js-issue-title')[0].innerText;
}

if (window.location.host.indexOf("github.com") > -1) {
    description = ">*DEPLOYING* `" + window.location.origin + window.location.pathname + "` _" + extractPullRequestDescription() + "_";
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: description
});