// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    reversed= parseInt(n.toString().split('').reverse().join(''));
     return reversed*Math.sign(n);

}

module.exports = reverseInt;




// reversed=parseInt(n.toString().split('').reverse().join(''));
// if(n<0){
//     return reversed*-1;

// }
// return reversed