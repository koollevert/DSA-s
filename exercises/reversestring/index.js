// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // const arr=str.split(''); //split returns array
    // arr.reverse() //flips order
    // return arr.join('') //join
    return arr=str.split('').reverse().join('')
    
}

module.exports = reverse;
