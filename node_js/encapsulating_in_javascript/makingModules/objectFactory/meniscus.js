var kneeModImp = require('./kneeMod.js');

var kneeMen = kneeModImp;

kneeMen.knee = function() {

    console.log("your meniscus");

};

console.log("The diagnosis is that you tore.. ");
kneeMen.knee();
