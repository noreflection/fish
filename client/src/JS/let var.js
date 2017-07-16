// let is defined only in {} scope, but var is accessible form anywhere
let str1 = 5;
var boolval = true;

if (boolval) {
    str1 = 10;
    console.log(str1); //inside scope 10
}
console.log(str1); //outside scope it's still 5

function test() {
    var str1 = 'fifteen';
}
console.log(str1); 