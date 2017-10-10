"use strict";

const dom = require("./dom");

var dinosaurs = [];

// var dinoGetter = function() {
//     $.ajax(".data/dinosaurs.json").done(function(data1) {
//         console.log("data1", data1);
//         data1.dinosaurs1.forEach(function(dino) {
//             dinosaurs.push(dino);
//         });
//         console.log("dinosaurs after foreach", dinosaurs);
//         $.ajax(".data/dinosaurs2.json").done(function(data2) {
//             data2.dinosaurs2.forEach(function(dino) {
//                 dinosaurs.push(dino);
//             });
//             console.log("dinos2", dinosaurs);
//             $.ajax(".data/dinosaurs3.json").done(function(data3) {
//                 data3.dinosaurs3.forEach(function(dino) {
//                     dinosaurs.push(dino);
//                 });
//             });
//         });
//     });
// };

var firstDinosaurJson = function(){
	return new Promise(function(resolve, reject){
	$.ajax('/data/dinosaurs.json').done(function(data1){
		resolve(data1.dinosaurs1);
	}).fail(function(error1){
		reject(error1);
	});
	});
};

var secondDinosaurJson = function(){
	return new Promise(function(resolve, reject){
	$.ajax('/data/dinosaurs2.json').done(function(data2){
		resolve(data2.dinosaurs2);
	}).fail(function(error2){
		reject(error2);
	});
	});
};

var thirdDinosaurJson = function(){
	return new Promise(function(resolve, reject){
	$.ajax('/data/dinosaurs3.json').done(function(data3){
		resolve(data3.dinosaurs3);
	}).fail(function(error3){
		reject(error3);
	});
	});
};

var dinoGetter = function(){
	firstDinosaurJson().then(function(results){
		results.forEach(function(dino){
			dinosaurs.push(dino);
		});
	console.log("results1", dinosaurs);

	secondDinosaurJson().then(function(results2){
		results2.forEach(function(dino){
		dinosaurs.push(dino);
		});
	});
	}).catch(function(error){
		console.log("error1", error);
	});
};





var initializer = function() {
    dinoGetter();
};

var getDinosaurs = function() {
    return dinosaurs;
};

module.exports = {
    initializer: initializer,
    getDinosaurs: getDinosaurs
};