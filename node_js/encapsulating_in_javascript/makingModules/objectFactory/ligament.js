var kneeModImp = require('./kneeMod.js');

var kneeLig = kneeModImp;

kneeLig.knee = function() {

    console.log("your ligament");

};

console.log("The diagnosis is that you tore.. ");
kneeLig.knee();
