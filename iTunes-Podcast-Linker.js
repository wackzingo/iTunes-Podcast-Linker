/**
 * This simple bookmarklet inserts a direct link
 * to listen to a particular podcast next to each
 * podcast on an iTunes page.
 */
javascript: (function () { 
	// This gets a list of all the rows in the podcast table.
	var tableRows = document.getElementsByClassName("podcast-episode");

	// Here we loop through the list of rows, grab the url to the podcast, and insert a link.
	for(var i = 0; i < tableRows.length; i++) {
		var url = tableRows[i].getAttribute("audio-preview-url");
		tableRows[i].insertCell(0).innerHTML = "<a href=\""+ url +"\">Listen</a>";
	}
    }());