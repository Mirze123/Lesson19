// const isSquare = (n) => {


//     return Math.sqrt(n)%1==0 ;
// }

// const capitalizeEachWord = (sentence) => {
//     return sentence.split(" ")
//         .map(x => {
//             let chArr = x.split('');
//             chArr[0] = chArr[0].toUpperCase();
//             return chArr.join('');
//         })
//         .join(' ');
// }

// console.log(capitalizeEachWord('hello world'));

// function findNextSquare(sq) {
//     // Return the next square if sq is a perfect square, -1 otherwise
//     return Math.sqrt(sq) % 1 === 0 ? (Math.sqrt(sq) + 1) ** 2 : -1;
// }

// console.log(findNextSquare(24));

// function duplicateCount(text){
//     //...

//     return text.split('')
//                .filter((x,idx) =>{
//                 return text.indexOf(x) == idx && text.indexOf(x) !== text.lastIndexOf(x)
//                }).length;


//   }

//   console.log(duplicateCount('aaabbdcc'));

// const myArray = [1,2,3,4,5,6];

// for(let item in myArray){
//     console.log(item);
//     console.log(myArray[item]);
// }


function highAndLow(numbers){
   const result = Math.max(...Array.from(numbers)).toString() + " " +  Math.min(...Array.from(numbers)).toString()
   return result ;
}

console.log(highAndLow('5471932'));

