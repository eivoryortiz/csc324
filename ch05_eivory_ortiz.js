/// Chapter 5 Homework

//FLATTENING 
let arrays = [[1,2,3], [4,5], [6]];
console.log(arrays.reduce((flat, current) => flat.concat(current), []));


//YOUR OWN LOOP 
function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}
loop(3, n => n > 0, n => n - 1, console.log);



//EVERYTHING 
function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}
console.log(every([1,3,5], n => n < 10));
console.log(every([2,4,16], n => n < 10));
console.log(every([], n => n < 10));

/// Although I didn't use the textbook's solution version for this one initally, it turned out to be the same when I looked again. 