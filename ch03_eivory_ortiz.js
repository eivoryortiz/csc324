///chapter 3 HW

//MINIMUM 

function min(a,b){
    if (a < b)
       return a;
   else
       return b;
}
console.log(min(0,10));

console.log(min(1,5));

console.log(min(0, -10));



//RECURSION

function isEven(n){
if (n < 0) {
 n = -n;
}
 while (n >= 2){
     n -= 2;
}
if (n == 0){
    return true;
      } else {
    return false;
      }
 }
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));



// BEAN COUNTING

function countChar(string, ch){
let counted = 0;
    let i = 0;
        while (i < string.length){
if (string[i] == ch){
    counted += 1;
}
  i++;
}
return counted;
}
function countBs(string) {
return countChar(string, "B");
}
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

///  I did look at the solutions for these problems on small things I was stuck on writing. I tried writing in R studio language since 
/// this is like the recursion exercises, we did in csc215 before I went back to the textbook for JavaScript's version. 

///The min function was the easiest out of all of these for me in terms of not needing to look at 
///the solution but when i saw the solution I saw that the code was the same I had put.

/// I liked the textbook version after I saw the solution, but I wanted to see if just like the first problem there a way was 
/// to condense it and by that i mean syntax. If n is negative the function makes it positive and checks it again.
/// In the while loop is where the subtracting 2 from the n occurs until its 0 or 1. Then n will find matches for 
/// if its even or odd by returning true for even or false for odd. Plus, with the familiarity of r and us using in 
/// class n type exercises so much I figured there was probably a more condensed version. But I had to first write it 
/// out to see if it would make sense and then I went on stackoverflow by asking the question if n = -n could work since
/// I am still writing down the difference between JavaScript's assignment operators versus r's. So like reminding myself 
/// that = is assigning whereas == or === is checking for a comparison. === is stating for coercion equality. Because this
/// question helped me to also modify the textbooks solution by using the increment operator of ++ for the index and += addition operator.

///In the bean counting I used i as in index and I start at 0 since you told us this is different from
///r studio in that it takes into account 0. I clicked on the hint for the problem to see if it would help me 
///in forming the string.length and it did, so I used a while loop for that by specifying if the string is the 
///same position as the index, then it will increase by 1. Then its going to move to the next character in the 
///string by adding 1 to the index, once thats finished its going to return how many times the character or ch 
///showed, which later when we apply it to the previous countBs function is where we see it work. 
