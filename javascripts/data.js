"use strict";

const dom = require("./dom");

let dinosaurs = [];



const firstDinosaurJson = () => {
    return new Promise(function(resolve, reject) {
        $.ajax('/data/dinosaurs.json').done(function(data1) {
            resolve(data1.dinosaurs1);
        }).fail(function(error1) {
            reject(error1);
        });
    });
};

const secondDinosaurJson = () => {
    return new Promise(function(resolve, reject) {
        $.ajax('/data/dinosaurs2.json').done(function(data2) {
            resolve(data2.dinosaurs2);
        }).fail(function(error2) {
            reject(error2);
        });
    });
};

const thirdDinosaurJson = () => {
    return new Promise(function(resolve, reject) {
        $.ajax('/data/dinosaurs3.json').done(function(data3) {
            resolve(data3.dinosaurs3);
        }).fail(function(error3) {
            reject(error3);
        });
    });
};



//use for most promises
// const dinoGetter = () => {
//     firstDinosaurJson().then(function(results) {
//         results.forEach(function(dino) {
//             dinosaurs.push(dino);
//         });
//         return secondDinosaurJson();
//     }).then(function(results2) {
//         results2.forEach(function(dino) {
//             dinosaurs.push(dino);
//         });
//         return thirdDinosaurJson();
//     }).then(function(results3) {
//         results3.forEach(function(dino) {
//             dinosaurs.push(dino);
//         });
//         console.log("dinosaurs", dinosaurs);
//         makeDinos();
//     });
// };


//use sometimes
const dinoGetter = () => {
	Promise.all([firstDinosaurJson(), secondDinosaurJson(), thirdDinosaurJson()]).then(function(results){
		console.log("resluts", results);
		results.forEach(function(result){
			result.forEach(function(dino){
				dinosaurs.push(dino);
			});
		});
		makeDinos();
	}).catch(function(error){
		console.log(error);
	});
};


const makeDinos = () => {
	dinosaurs.forEach(function(dino){
		dom(dino);
	});
};

const initializer = () => {
    dinoGetter();
};

const getDinosaurs = () => {
    return dinosaurs;
};

module.exports = {
    initializer: initializer,
    getDinosaurs: getDinosaurs
};