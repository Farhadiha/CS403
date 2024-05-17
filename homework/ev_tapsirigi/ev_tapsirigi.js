// 1. Write a program that determines whether a given number is positive or negative.

{
    let a = prompt("Type any number you want: ");
    if(a > 0){
        console.log("Your number is positive");
    }
    else if(a < 0)
    {
        console.log("Your number is negative");
    } else {
        console.log("Your number is 0");
    }
}

// 2. Write a program that checks if a number is even or odd.

{
    let a = prompt("Type any number you want: ");
    if(a <= 0){
        console.log("Invalid number. It is negative or zero");
    }
    else if(a % 2 == 0){
        console.log("Your number is even");
    }
    else if(a % 2 == 1){
        console.log("Your number is odd");
    }
}

// 3. Write a program to determine the greater of two numbers.

{
    let a = prompt("First number: ");
    let b = prompt("Second number: ");
    if(a > b){
        console.log(a + " is greater than " + b);
    } 
    else if(b > a){
        console.log(b + " is greater than " + a);
    }
    else{
        console.log(a + " is equal to " + b);
    }
}

// 4. Write a program that assigns a letter grade based on a numerical grade.

{
    let a = prompt("Type your grade: ");
    if(90 < a && a <= 100){
        console.log("Your grade is A. Your point is " + a);
    }
    else if(80 < a){
        console.log("Your grade is B. Your point is " + a);
    }
    else if(70 < a){
        console.log("Your grade is C. Your point is " + a);
    }
    else if(60 < a){
        console.log("Your grade is D. Your point is " + a);
    }
    else if(50 < a){
        console.log("Your grade is E. Your point is " + a);
    }
    else{
        console.log("Your grade is F. You did not pass the exam");
    }
}

// 5. Write a program that calculates the ticket price based on age.


{
    let a = prompt("Type your age: ");
if(a <= 5){
    console.log("Your child's ticket price will be 2.5 dollars");
}
else if(a <= 18){
    console.log("Your ticket price will be 4 dollars");
}
else{
    console.log("Your ticket price will be 6.5 dollars");
}
}

// 6. Write a program that calculates a discount based on the purchase amount.

{
    let a = prompt("Welcome. How many dollars did you spend today?");
    if(a <= 0){
        console.log("Invalid input");
    }
    else if(a < 10){
        console.log("I am sorry, you do not get discount. Your total is $" + a);
    }
    else if(a < 50){
        console.log("You get " + 5 + "% discount. Your total is " + ((100-5)/100)*a);
    }
    else if(a < 100){
        console.log("You get " + 15 + "% discount. Your total is " + ((100-15)/100)*a);
    }
    else{
        console.log("You get " + 20 + "% discount. Your total is " + ((100-20)/100)*a);
    }
}

// 7. Write a simple number guessing game.

{
    let x = 7
    let a = prompt("Give me a number between 1 and 9: ");
    if(a < 1 || a > 9){
        console.log("Be careful, I said between 1 and 9!");
    }
    else if(a == x){
        console.log("Congrats, you find the number!!!");
    }
    else{
        console.log("Try your chance again.");
        console.log("hint: it is lucky number for some people ;)");
    }
    
}