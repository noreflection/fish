//unmodified
var player = { score: 1, name: 'Jeff' };
console.log(player);

//with mutatuion
player.score = 2;
console.log(player);

//without mutation
var newPlayer = Object.assign({}, player, { score: 2 })
//var newPlayer={...player,score:2}; //using object spread syntax proposal
console.log(newPlayer);