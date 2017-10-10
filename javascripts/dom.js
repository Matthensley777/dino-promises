"use strict";

let main = require("./main");


let outputDiv = $('#dinosaur');

const domString = (dinosaur) => {
	let dinoString = '';
	dinoString += `<div>`;
	dinoString += `<h1>${dinosaur.type}</h1>`;
	dinoString += `</div>`;
	printToDom(domString);
};


var printToDom = function(strang) {
	outputDiv.append(strang);
};

module.exports = domString;