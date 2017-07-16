var num = 123;
var str = '123';

if (num == str) {
 console.log('variables values are equals');
}

num ='123'; //changed num type to string
if (num === str) {
 console.log('variables types and values are equals');
}