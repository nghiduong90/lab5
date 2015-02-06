'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

$("a.name").click(projectClick);
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
}

function projectClick(e) {
    // prevent the page from reloading 
    console.log("clicked clicked!!!!");
    e.preventDefault();
    // In an event handler, $(this) refers to
    // the object that triggered the event
    //$(this).css("background-color", "#7fff00");

    var nameTitle = $(this).find("h3").text();
    var nameHeader = $(".name-change");
    console.log(nameTitle);
    //var changeTitle = $(this).js(anagrammedName(nameTitle));
    //console.log(changeTitle);
    nameHeader.text(anagrammedName(nameTitle));
}

function anagrammedName(name) {
	// Thanks, Internet Anagram Server!
	
	if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (name == "Allen Newell") {
		return "Ellen All New";
	}
	else if (name == "Lucy Suchman") {
		return "Lunacy Chums";
	}
	else if (name == "Grace Hopper") {
		return "Gear Chopper";
	}
	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}