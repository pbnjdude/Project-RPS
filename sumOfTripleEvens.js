// function sumOfTripleEvens(array){
//     return array
//         .filter((num) => num % 2 === 0)
//         .map((num) => num *3)
//         .reduce((acc, curr) => acc + curr); 
// }

// test = [1, 2, 3, 4, 5, 6]

// function sumOfTripledEvens(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     // Step 1: If the element is an even number
//     if (array[i] % 2 === 0) {
//       // Step 2: Multiply this number by three
//       const tripleEvenNumber = array[i] * 3;

//       // Step 3: Add the new number to the total
//       sum += tripleEvenNumber;
//     }
//   }
//   return sum;
// }

// sumOfTripleEvens(test); 



// function camelize(str){
//     return str
//         // here i split the words into index with the dash being the split point
//         .split("-")
//         // i pass the function i created with split and passes that into .map and 
//         .map((word, index) => index == 0 ? word: word[0].toUpperCase() + word.slice(1))
//         .join(""); 
// }
// function filterRange(arr, a, b){
//     return arr.filter(item => (a <= item && item <= b));
// }

// let arr = [5, 3, 8, 1]; 

// let filtered = filterRange(arr, 1, 4); 

// alert(filtered); 
// alert(arr); 

// function filterRangeInPlace(arr, a, b){
//     for (let i = 0; i < arr.length; i++){
//         let val = arr[i]; 

//         if (val < a || val > b){
//             arr.splice(i, 1); 
//             i --; 
//         }
//     }
// }
// let arr = [5, 3, 8, 1]; 
// filterRangeInPlace(arr, 1, 4); 
// alert(arr); 


let arr = [5, 2, 1, -10, 8]; 

arr.sort((a, b) => b-a);
arr.shift();

alert(arr); 
