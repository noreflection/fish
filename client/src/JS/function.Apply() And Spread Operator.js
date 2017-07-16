var args = [0, 1, 2];

function funct(x, y, z) {
  console.log(x + 1, y + 1, z + 1);
}
//using apply
//funct.apply(null, args);

//using spread operator
funct(...args);