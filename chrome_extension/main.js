var message = document.querySelector('#message');

chrome.runtime.onMessage.addListener(function(request, sender) {
	var message = document.querySelector('#message');

	if (request.action == "getSource") {
		if (request.source) {
			message.innerText = request.source;
			// Copy and paste the text
			var aux = document.createElement("input");
			aux.setAttribute("value", request.source);
			document.body.appendChild(aux);
			aux.select();
			document.execCommand("copy");
			document.body.removeChild(aux);
		} else {
			message.innerText = "Get a Pull Request going homie!";
		}
	}
});

function onWindowLoad() {
	chrome.tabs.executeScript(null, {
		file: "extractData.js"
	}, function() {
		// If you try and inject into an extensions page or the webstore/NTP you'll get an error
		if (chrome.runtime.lastError) {
			message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
		}
	});
}

window.onload = onWindowLoad;