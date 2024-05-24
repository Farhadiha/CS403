const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// 1.Sum all the numbers in 'arr1'

{
    let sum = 0
    arr1.map(num => sum += num)
    console.log(sum);
}

// // 2.Add two numbers (10,88) to end of arr1 (push methods)

{
    arr1.push(10, 88)
    console.log(arr1);
}

// 3.Remove first two numbers from arr1

{
    arr1.shift()
    arr1.shift()
    console.log(arr1);
}

// 4.Add three numbers (0,9,11) in front of arr1(unshift)

{
    arr1.unshift(11)
    arr1.unshift(9)
    arr1.unshift(0)
    console.log(arr1);
}

// 5.Remove four numbers in front of arr1(shift)

arr1.shift()
arr1.shift()
arr1.shift()
arr1.shift()
console.log(arr1);

////////////// TASK 7 //////////////

{

const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]
// 1.Console values from "Rufet" to "Fuad"

{
   console.log(arr2.slice(2, 8));
}

// 2.Change Gulshen to Rovshen

{
    console.log(arr2.map(change => change.replace("Gulshen", "Rovshen")));
}

// 3.Console each name with map

{
    console.log(arr2.map(name => name));
}

// 4.Console only names which is Anar

{
    console.log(arr2.filter(anar => anar == "Anar"));
}

// 5.Console all names where name is Anar, then change it to "Perviz"

{
    console.log(arr2.filter(anar => anar == "Anar"));
    console.log(arr2.map(chanar => chanar.replace("Anar", "Perviz")));
}

// 6.Console last second value of arr2

{
    console.log(arr2[arr2.length-2]);
}

// 7.Console length of arr2

{
    console.log(arr2.length);
}

}
////////////// TASK 8 //////////////
const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]
// 1.Show only numbers

{
    console.log(arr3.filter(num => typeof num === "number"));
}

// 2.Show only true values

{
    console.log(arr3.filter(positive => positive));
}

// 3.Show only false values

{
    console.log(arr3.filter(negative => !negative));
}

// 4.Show only strings

{
    console.log(arr3.filter(string => typeof string === "string"));
}

////////////// TASK 8 //////////////
const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]
// 1.Console (only even numbers)

{
    console.log(numbers.filter((even) => even % 2 == 0));
}

// 2.Console (only odd numbers)

{
    console.log(numbers.filter((odd) => odd % 2 == 1));
}

////////////// TASK 9 //////////////
const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]

// 1.Console all values of arr4 -
// if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)

{
   
   let rewrite = arr4.map(rewrite => {
    if (typeof rewrite == 'number'){
        return rewrite + 10;
    }
    else if (typeof rewrite == 'string'){
        return rewrite + ' is string'
    }
    else if (!rewrite){
        return rewrite + ' is falsy'
    }
    else {
        return rewrite
    }
   })

   console.log(rewrite);
}

// Example: [10,'true',false]
// Result: [20, "true is string", "false is falsy value"]

// 2.Sum all numbers of arr4

{
    let sum = 0
    let num = arr4.filter(num => typeof num === 'number')
    num.filter(summa => sum += summa)
    console.log(num, sum);
}

// 3.Count only the values that are true

{
    let positive = arr4.filter(positive => positive);
    console.log(positive.length, positive);
}

// 4.Count only the values that are string

{
    let string = arr4.filter(string => typeof string === 'string');
    console.log(string.length, string);
}

// 5.Count only the values that are false

{
    let negative = arr4.filter(negative => !negative);
    console.log(negative.length, negative);
}

////////////// TASK 10 //////////////
{
// 1.Create a object add your name, surname, age and city.

const info = {
    name: 'Farhad',
    surname: 'Hajiyev',
    age: 19,
    city: 'Baku'
}

console.log(info);

// 2.Then change name to "Jhon"

info.name = 'Jhon'
console.log(info);

const obj = {
    email: 'ulfat@gmail.com',
    info: {
        gender: 'Male',
        loc: {
            city: "Baku",
            street: 'Nizami 22',
            education: {
                "uni name": "ADNSU",
            }
        }
    }
}

// 3.Console gender

console.log(obj.info.gender);

// 4.Console city

console.log(obj.info.loc.city);

}

////////////// TASK 11 //////////////
{
// let fullName = 'Ulfat Zakirli Rovshen'

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)

let fullName = 'Farhad Hajiyev Ilgar'
console.log(fullName.split(''));

// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin

let firstName = fullName.slice(0, 7)
let lastName = fullName.slice(7, 15)
let fathertName = fullName.slice(15)
let newFullName = [lastName + firstName + fathertName]
console.log(newFullName);

// 3) Alinan yeni arrayi stringe cevirin(join)

console.log(newFullName.join(''));

let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin

let repeat = arr.filter(fives => fives == 5)
console.log(repeat.length, repeat);

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin

sum = 0
arr.filter(summa => sum += summa)
console.log(sum);

//6) arrayda tekrar olunan reqemleri artan sira ile duzun

// let asc = arr.sort((a, b) => a-b)
// let same = arr.find(same => same != same - 1)
// console.log();

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)

let max = Math.max(...arr)
let quantity = arr.filter(quantity => quantity == max)
console.log(quantity.length, quantity);

//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)

let myName = 'Farhad'.length
let ifMyName = arr.includes(myName)
console.log(ifMyName);

//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin

let number = arr.find(num => num % 3 === 2 && num > 2) 
let index = arr.findIndex(num => num % 3 === 2 && num > 2)
console.log(number, index);

//10) arraydaki en boyuk reqemin ilk indexini tapin

let maxi = Math.max(...arr)
let maxIndex =arr.findIndex(obj => obj == maxi)
console.log(maxi, maxIndex);

//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin

let fourArray = []

arr.forEach((four, index) => {
    if (four === 4) {
        fourArray.push(index);
    }
});

console.log(fourArray);

//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin

let firstIndex = arr.indexOf(5)
let lastIndex = arr.lastIndexOf(5)
console.log(firstIndex, lastIndex);

//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin

let bigTwo = arr.filter(two => two > 2)
let diff = arr.length - bigTwo.length
console.log(diff, bigTwo);

//14) 7 reqeminin indexleri cemini tapin.

let sumSev = 0;
arr.forEach((seven, index) => {
    if (seven === 7) {
        sumSev += index;
    }
});

console.log(sumSev);

}
///////////// TASK 12//////////////

let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]


//QEYD Bu tasklarda arr2 istifade edilecekdir
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin

let newArray = arr2.filter(obj => obj.name.startsWith('t'))
console.log(newArray);

// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin

let newArray2 = arr2.filter(obj => obj.name.startsWith('t') && obj.name.endsWith('t'))
console.log(newArray2.length, newArray2);

// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin

let sam = 0
newArray2.filter(summa => sam += summa.key)
console.log(sam);

// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

arr2.filter(obj => obj.name.endsWith("e")).forEach(obj => obj.name = "SuperDev")
console.log(arr2);

// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin

let longName = arr2.reduce((a, b) => {
    if (b.name.length > a.name.length) {
        return b;
    } else {
        return a;
    }
});

console.log(longName.key);

// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin

let longIndex = arr2.findIndex(lon => lon.name.length === Math.max(...arr2.map(heig => heig.name.length)))
let squareIndex = longIndex ** 2
console.log(squareIndex);

// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.

let nameFour = arr2.filter(four => four.name.length === 4);
console.log(nameFour);

// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin



// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.



// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.