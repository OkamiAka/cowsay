const userInfo = require('./information');
let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `nom: ${userInfo.name} camp: ${userInfo.camp}`,
    e : "oO",
    T : "U "
}));

