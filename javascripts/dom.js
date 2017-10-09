"use strict";

let dom = require("main");


let dinos = document.getElementById("dinosaur");

const domString = () => {
	let dinoString = '';
	dinoString += `<div>tRex</div>`;
};


const printToDom = (domString) => {
	dinos.innerHTML = domString;
};