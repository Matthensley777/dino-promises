"use strict";

const dom = require('./dom');

let dinosaurs = [];



const firstDinosaurJson = () => {
    return new Promise((resolve, reject) => {
        $.ajax('/data/dinosaurs.json').done((data1) => {
            resolve(data1.dinosaurs1);
        }).fail((error1) => {
            reject(error1);
        });
    });
};

const secondDinosaurJson = () => {
    return new Promise((resolve, reject) => {
        $.ajax('/data/dinosaurs2.json').done((data2) => {
            resolve(data2.dinosaurs2);
        }).fail((error2) => {
            reject(error2);
        });
    });
};

const thirdDinosaurJson = () => {
    return new Promise((resolve, reject) => {
        $.ajax('/data/dinosaurs3.json').done((data3) => {
            resolve(data3.dinosaurs3);
        }).fail((error3) => {
            reject(error3);
        });
    });
};

const allTheCats = () => {
    return new Promise((resolve, reject) => {
        $.ajax('/data/cats.json').done((data4) => {
            resolve(data4.cats);
        }).fail((error4) => {
            reject(error4);
        });
    });
};



//use sometimes
const dinoGetter = () => {
    Promise.all([firstDinosaurJson(), secondDinosaurJson(), thirdDinosaurJson()]).then((results) => {
        allTheCats().then((cats) => {
        results.forEach((result) => {
            result.forEach((dino) => {
                dino.snacks = [];
                dino.catIds.forEach((catId) => {
                    console.log("catId", catId);
                    cats.forEach((cat)=>{
                        if(cat.id === catId){
                            dino.snacks.push(cat);
                        }
                    });
                });
                dinosaurs.push(dino);
            });
        });
        makeDinos();
    });

        console.log("dino", dinosaurs);
        
    }).catch((error) => {
        console.log(error);
    });
};


const makeDinos = () => {
    dinosaurs.forEach((dino) => {
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