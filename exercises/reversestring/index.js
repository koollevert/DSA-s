// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((reversed, character)=>{
        return character+reversed;
    }, '');
   
   
}

module.exports = reverse;

 // const arr=str.split(''); //split returns array
    // arr.reverse() //flips order
    // return arr.join('') //join

    // return arr=str.split('').reverse().join('')
    
     // let reversed = '';
    // for(let character of str){
    //     reversed=character+reversed; //the deal is here :prepend expression character+reversed
    // }

    // return reversed;
