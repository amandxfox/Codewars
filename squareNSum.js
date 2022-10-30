// Task
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


function squareSum(numbers){
 return numbers.reduce((acc,c) => acc + c * c, 0)
}

// Alt
// function squareSum(numbers){
//  return numbers.reduce(function(sum, n){
//    return (n*n) + sum;
//  }, 0)
// }
