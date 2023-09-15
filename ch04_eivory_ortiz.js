///Chapter 4 Homework


//THE SUM OF A RANGE
function range(start, end, step = start < end ? 1 : -1) {
 let array = [];
   if (step > 0) {
      for (let i = start; i <= end; i += step) array.push(i);
       } else {
         for (let i = start; i >= end; i += step) array.push(i);
         }
    return array;
  }
  
  function sum(array) {
    let total = 0;
    for (let value of array) {
      total += value;
    }
    return total;
  }
  
  console.log(range(1, 10))
  console.log(range(5, 2, -1));
  console.log(sum(range(1, 10)));

  //// I had to use the solution given to us from the textbook because 
  ////I was confused on how to start the array parameter of range.
  //// However, I did undertand how to write function sum so that wasn't too bad
  //// when I saw that the code was essentially similar to my intial attempt.
  //// I definitely need to practice more array exercises, just in setting up where to
  //// place the index and making sure I know where to include the length specification 
  //// for an array. I did find it interesting when in class you told us that having elements in 
  //// in the array (expression) was valid, so I am gonna try that out and now with knowing how
  //// to debug it'll better help me understand.




// REVERSING AN ARRAY
function reverseArray(array){
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
      output.push(array[i]);
    }
    return output;
  }
  console.log(reverseArray(["A", "B", "C"]));


////This one compared to the first one was easier for me to understand, I think its mainly because
//// the first one needs the helper function in order to perform the final task. And I am use to writing those in R.
//// And they do take a bit of time to write into code for me but other than that when I clicked on the hint in the textbook.
//// It helped me understand better the code.



// REVERSE ARRAY IN PLACE EXTRA CREDIT (ATTEMPT)
function reverseArrayInPlace(array){
    for(let i = 0; i < array.length / 2; i++){
        [array[i], array[array.length - 1 - i]] = [array.length - 1 - i],
    }
   return array;
}
reverseArrayInPlace(array);
console.log(array);

//// Now I did have to use stackoverflow for this, and as well
//// the solution in the textbook and mdn web docs. To formulate this, I don't think it
//// actually works, but its an attempt, as I want to be better at this.