function extractPullRequestDescription() {
	return document.querySelectorAll('#partial-discussion-header .js-issue-title')[0].innerText;
}

if (window.location.host.indexOf("github.com") > -1) {
	// Create a "hidden" input
	var aux = document.createElement("input");

	aux.setAttribute("value", ">*DEPLOYING* `" + window.location.origin + window.location.pathname + "` _" + extractPullRequestDescription() + "_");
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
	alert('copied to clipboard')
}