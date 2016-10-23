function extractPullRequestDescription() {
	return document.querySelectorAll('#partial-discussion-header .js-issue-title')[0].innerText;
}

if (window.location.host.indexOf("github.com") > -1) {
	alert(">*DEPLOYING* `" + window.location.origin + window.location.pathname + 
			"` _" + extractPullRequestDescription() + "_");
}