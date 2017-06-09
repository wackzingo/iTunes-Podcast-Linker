// ==UserScript==
// @name         iTunes-Podcast-Linker
// @namespace    http://athleo.net/
// @version      1.0
// @description  It replaces the links to listen to a podcast in iTunes with a link directly to the video or mp3 when viewing an iTunes podcast page on the web.
// @author       Zach Wingo
// @match        http://itunes.apple.com
// @grant        none
// ==/UserScript==
/**
 * This simple bookmarklet inserts a direct link
 * to listen to a particular podcast next to each
 * podcast on an iTunes page.
 */
(function () { 
        'use strict';

	var tableRows = document.getElementsByClassName("podcast-episode"); 

	for(var i = 0; i < tableRows.length; i++) { 

		var lastCell = tableRows[i].cells.length - 1; 
		tableRows[i].deleteCell(lastCell);

		var url = tableRows[i].getAttribute("audio-preview-url"); 

		url = (url === null) ? url = tableRows[i].getAttribute("video-preview-url"): url;

		tableRows[i].insertCell(lastCell).innerHTML = "<a href=\""+ url +"\">Listen</a>"; } 
	 })();
