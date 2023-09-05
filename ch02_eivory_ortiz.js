
// Eivory Ortiz
// Chapter 2

// Looping A Triangle

let line = "#"; 
while (line.length <= 7) {
    console.log(line);
    line = line + "#";
}
/// Finn responded during class time how we could modify the code, line 8


//Fizzbuzz

for(let n = 1; n <=100; n++){
let message = "";
if (n % 3 == 0){
    message = "Fizz";
}
if (n % 5 == 0){
    message = message + "Buzz";
}
if (message === ""){
    message = n;
}
console.log(message);
}


/// Referenced back to the chapter specifically section about control flow. 
/// I knew how to set up the if else statements, the for, and let, and I knew I'd be using console.log at the end of the code.
/// We learned in class today (31st) about the meaning behind the === so from the previous 
/// code I had I altered it to incorporate it.
/// We are printing all the numbers from 1 to 100 with the
/// the two exceptions as stated in the exercise.
/// This is being represented by the first two if statements.
/// The third if statement is to show that if its empty meaning the number
/// isn't divisble by either 3 or 5, so we get that number by itself messaged or in this case printed out 
/// as represented (line 26).
/// I did however look after I finished this code at the solution to see if I was accurate with my proposed idea 
/// compared to the first basic one I had which had a minor syntax error that you helped me in class point out.


//Chessboard

let size = 8;
let chessboard = "";
for (let row = 0; row < size; row ++){
    for (let col = 0; col < size; col ++){
        if ((row + col) % 2 == 0){
            chessboard += " ";
        } else {
            chessboard += "#";
        }
    }
    chessboard += "\n";
}
console.log(chessboard);

/// I was confused in the beginning by the intricacy of this problem, but I did what anyone would do and write down what I understood first.
/// So I understood that we had to create a grid that is 8 by 8.
/// I knew that just like our first exercise I'd be using the hashtag again as a string.
/// The let function is what will create the empty grid.
/// The first for line is going through each row starting with 0 until its completed all 8.
/// The same is applied to the nezt for loop except this time its for the columns.
/// Now this part is where I was getting some trobule in how to write it checking the sum.
/// I clicked on the hints option the exercise has to help me brainstorm.
/// I knew since this chapter has a large emphasis on control flow.
/// Its more than obvious I'd be using an if, else, ifelse statement of some sort.
/// So I just typed one out which was if and else. But I didn't insert anything yet because I knew we needed to address
/// the new line characters for the grid to take shape.
/// So I inserted my row and col or columns in the first statement which was my if.
/// It was then I relaized chessboard would have to be in the else statement.
/// So I went back again to make sure I wasn't getting any syntax errors since this is my first time with javascript.
/// So I inserted chessboard and the += and the symbols for writing new character line we learned for R.
/// And I decided to see the solution to see how I can finish the rest essentially.
/// I saw that I wasn't far off so I inserted what was left and checked to see if my grid was the same as the one provided.