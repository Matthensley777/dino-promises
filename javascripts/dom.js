"use strict";

const outputDiv = $('#dinosaurs');

const domString = (dinosaurs) => {
	let domStrang = '';
      domStrang += `<div>`;
      domStrang +=   `<h1>${dinosaurs.type}</h1>`;
      domStrang += `</div>`;
	printToDom(domStrang);
};


const printToDom = (strang) => {
	outputDiv.append(strang);
};

module.exports = domString;