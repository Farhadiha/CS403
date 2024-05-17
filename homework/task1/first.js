////////////// TASK 1 //////////////

console.log("TASK 1");

// 1.Multiply 12 with 8, and console the result:

 {
  let a = 12;
  let b = 8;
  let result = a * b

  console.log("Multiplication of 12 and 8 is " + result);
 }

// 2.Divide 10 by 2 add result to variables x, and console x:

 {
  let a = 10;
  let b = 2;
  let x = 10/2;
  console.log("Division of 10 by 2 is " + x);
 }

// 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.

 {
  let num1;
  let num2;
  num1 = 20;
  num2 = 17;
  addition = num1 + num2;
  console.log("Addition num1 and num2 is " + addition);
 }

/* 4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
  then add them to varibale name (info) and console info. */

  {
    let name = "Farhad";
    let surname = "Hajiyev";
    let year = "2004";
    let info = "My fullname is " + name + " "  + surname + ". I was born in " + year + "."
    console.log(info);
  }

// 5.Console the remainder(%) when 17 is divided by 12.

  {
    let a = 17;
    let b = 12;
    let remainder = 17%12;
    console.log("When 17 is divided by 12, remainder is " + remainder);
  }
// 6.Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again
//  and reassign value Gence,console result.

  {
    let cityName = "Baku";
    cityName = "Ganja";
    console.log("Once upon a time " + cityName + " was capital of ADR");
  }

////// TASK 2 //////////////

console.log("TASK2");

// let a = 1, b = 1;
// let c = ++a;
// let d = b++;

// console.log(c); // ?
// console.log(d); // ?
// console.log(b); // ?

  {
   let a = 1, b = 1;
   let c = ++a;
   let d = b++;

   console.log(c);
   console.log(d);
   console.log(b);
  }

////////////// TASK 3 //////////////

console.log("TASK 3");

// let a = 2;
// let x = 1 + (a *= 2);
// console.log(x); // ?

  {
    let a = 2;
    let x = 1 + (a *=2);
    console.log(x);
  }

////////////// TASK 4 //////////////

console.log("TASK 4");

// console.log('test1', test); // ?
// {
//     let test = "something"
//     console.log('test2', test); // ?
// }
// console.log('test3', test);  // ?

  {
    console.log('test1', test);
    {
     let test = "something" 
     console.log('test2', test);
    }
    console.log('test3', test);
  }

// console.log('test1', test);  // ?
// {
//     var test = "something"
//     console.log('test2', test); // ?
// }
// console.log('test3', test); // ?

  {
    console.log('test1', test);  
   {
     var test = "something"
     console.log('test2', test);
   }
    console.log('test3', test);
  }

////////////// TASK 5 //////////////

console.log("TASK 5");

//Find the type of all the following cases

// let name = "Ulfat"
// let surname = Zakirli
// let year = 2000
// year = "2000"
// let city;
// let qualification = null
// let obj = { name: 'ulfat' }
// let arr = ['a', 'b', 'c']

  {
   let name = "Ulfat"
   console.log("First one is string because of its quotes: " + typeof name);
  
   //let surname = Zakirli
   console.log("Second one does not have type.");

   let year = 2000
   console.log("Third one is: " + typeof year);

   year = "2000"
   console.log("Third one is just like first one: " + typeof year);

   let city;
   console.log("If we do not define the variable, it is: " + typeof city);

   let qualification = null
   console.log("There is one primitive type that is non-primitive and its name is " + typeof qualification);

   let obj = { name: 'ulfat' }
   console.log("There is one non-primitive type:" + typeof obj);

   let arr = ['a', 'b', 'c']
   console.log("Arrays are also " + typeof arr);
  }