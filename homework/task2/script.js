const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// 1.Sum all the numbers in 'arr1'

{
    let sum = 0
    arr1.map(num => sum += num)
    console.log(sum);
}
{
    let result = arr1.reduce((sum, num) => sum + num, 0)
    console.log('result', result);
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

{
    for(let i = 0; i < arr2.length; i ++){
        if(arr2[i] == "Gulshen"){
            arr2[i]= "Rovshen"
        }
        else{
            continue
        }
    }
    console.log(arr2);
}
// 3.Console each name with map

{
    console.log(arr2.map(name => name));
}

{
    for(i = 0; i < arr2.length; i ++){
        console.log(arr2[i]);
    }
}

// 4.Console only names which is Anar

{
    console.log(arr2.filter(anar => anar == "Anar"));
}
{
    for(i = 0; i < arr2.length; i ++){
        if (arr2[i] == "Anar") {
            console.log(arr2[i]);
        } else {
            continue
        }
    }
}

// 5.Console all names where name is Anar, then change it to "Perviz"

{
    console.log(arr2.filter(anar => anar == "Anar"));
    console.log(arr2.map(chanar => chanar.replace("Anar", "Perviz")));
}
{
    for(i = 0; i < arr2.length; i ++){
        if (arr2[i] == "Anar") {
            arr2[i] = "Perviz"
            console.log(arr2[i]);
        } else {
            continue
        }
    }
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
{
    for(i = 0; i < arr3.length; i ++){
        if (typeof arr3[i] == "number") {
            console.log(arr3[i]);
        } else {
            continue
        }
    }
}

// 2.Show only true values

{
    console.log(arr3.filter(positive => positive));
}
{
    for(i = 0; i < arr3.length; i ++){
        if (arr3[i]) {
            console.log(arr3[i]);
        } else {
            continue
        }
    }
}

// 3.Show only false values

{
    console.log(arr3.filter(negative => !negative));
}
{
    for(i = 0; i < arr3.length; i ++){
        if (!arr3[i]) {
            console.log(arr3[i]);
        } else {
            continue
        }
    }
}

// 4.Show only strings

{
    console.log(arr3.filter(string => typeof string === "string"));
}
{
    for(i = 0; i < arr3.length; i ++){
        if (typeof arr3[i] == "string") {
            console.log(arr3[i]);
        } else {
            continue
        }
    }
}

////////////// TASK 8 //////////////
const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]
// 1.Console (only even numbers)

{
    console.log(numbers.filter((even) => even % 2 == 0));
}
{
    for(i = 0; i < numbers.length; i ++){
        if (numbers[i] % 2 == 0) {
            console.log(numbers[i]);
        } else {
            continue
        }
    }
}

// 2.Console (only odd numbers)

{
    console.log(numbers.filter((odd) => odd % 2 == 1));
}
{
    for(i = 0; i < numbers.length; i ++){
        if (numbers[i] % 2 == 1) {
            console.log(numbers[i]);
        } else {
            continue
        }
    }
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
{
    for(i = 0; i < arr4.length; i ++){
        if (typeof arr4[i] == 'number'){
            console.log(arr4[i] + 10);
        }
        else if (typeof arr4[i] == 'string'){
            console.log(arr4[i] + ' is string');
        }
        else if (!arr4[i]){
            console.log(arr4[i] + ' is falsy');
        }
        else {
            console.log(arr4[i]);
        }
       }
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
{
    let sum = 0
    for(i = 0; i < arr4.length; i ++) {
        if (typeof arr4[i] == 'number'){
            sum += arr4[i]
        }
    }
    console.log(sum);   
}

// 3.Count only the values that are true
{
    let positive = arr4.filter(positive => positive);
    console.log(positive.length, positive);
}
{
    for(i = 0; i < arr4.length; i ++) {
        if (arr4[i]){
            console.log(arr4[i]);
        }
    }
}

// 4.Count only the values that are string

{
    let string = arr4.filter(string => typeof string === 'string');
    console.log(string.length, string);
}
{
    for(i = 0; i < arr4.length; i ++) {
        if (typeof arr4[i] === "string"){
            console.log(arr4[i]);
        } 
    }
}

// 5.Count only the values that are false

{
    let negative = arr4.filter(negative => !negative);
    console.log(negative.length, negative);
}
{
    for(i = 0; i < arr4.length; i ++) {
        if (!arr4[i]){
            console.log(arr4[i]);
        } 
    }
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
{
   function getValue(firstName, lastName, fatherName) {
       return `${firstName} ${lastName} ${fatherName}`
    }

   console.log(getValue("Farhad", "Hajiyev", "Ilgar"));
}

// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin

let firstName = fullName.slice(0, 7)
let lastName = fullName.slice(7, 15)
let fathertName = fullName.slice(15)
let newFullName = [lastName + firstName + fathertName]
console.log(newFullName);

{
    function getValue(firstName, lastName, fatherName) {
        return `${lastName} ${firstName} ${fatherName}`;
    }
    
    console.log(getValue("Farhad", "Hajiyev", "Ilgar"));
}


// 3) Alinan yeni arrayi stringe cevirin(join)

console.log(newFullName.join(''));

{
    function getValue(firstName, lastName, fatherName) {
        return [lastName, firstName, fatherName];
    }
    const newArray = getValue("Farhad", "Hajiyev", "Ilgar")
    console.log(newArray.join(' '));
}

let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin

let repeat = arr.filter(fives => fives == 5)
console.log(repeat.length, repeat);

{
    function getValue(anyArr){
        count = 0;
        for(i = 0; i < anyArr.length; i ++){
            if(anyArr[i] == 5){
                count ++;
            }
        }
        console.log(count);
    }
    getValue(arr)
}

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin

sum = 0
arr.filter(summa => sum += summa)
console.log(sum);

{
    function getValue(anyArr){
        sum = 0
        for(i = 0; i < anyArr.length; i ++){
            sum += anyArr[i]
        }
        console.log(sum);
    }
    getValue(arr)
}

//6) arrayda tekrar olunan reqemleri artan sira ile duzun

let asc = arr.sort((a, b) => a - b)
console.log(asc);
{
    function getValue(anyArr){
        let asc = anyArr.sort((a, b) => a - b)
        console.log(asc);
    }
    getValue(arr)
}
//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)

let max = Math.max(...arr)
let quantity = arr.filter(quantity => quantity == max)
console.log(quantity.length, quantity);

{
    function getValue(anyArr) {
        let max = Math.max(...anyArr)
        count = 0
        for(i = 0; i < anyArr.length; i++){
            if(anyArr[i] == max){
                count ++
            }
        }
        console.log(count);
    }
    getValue(arr)
}

//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)

let myName = 'Farhad'.length
let ifMyName = arr.includes(myName)
console.log(ifMyName);

{
    function getValue(anyArr, yourName){
        for(let i = 0; i < anyArr.length; i ++){
            ifMyName = false
            if(yourName.length == anyArr[i]){
            ifMyName = true
            break
            }
        }
        console.log(ifMyName);
    }
    getValue(arr, 'Farhad')
}

//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin

let number = arr.find(num => num % 3 === 2 && num > 2) 
let index = arr.findIndex(num => num % 3 === 2 && num > 2)
console.log(number, index);

{
    function getValue(anyArr){
        for(let i = 0; i < anyArr.length; i ++){
            if(anyArr[i] % 3 == 2 && anyArr[i] > 2){
                console.log(anyArr[i], i);
                break
            }
        }
    }
    getValue(arr)
}

//10) arraydaki en boyuk reqemin ilk indexini tapin

let maxi = Math.max(...arr)
let maxIndex =arr.findIndex(obj => obj == maxi)
console.log(maxi, maxIndex);

{
    function getValue(anyArr){
        let max = Math.max(...anyArr)
        for(let i = 0; i < anyArr.length; i ++){
            if(anyArr[i] == max){
                console.log(anyArr[i], i);
                break
            }
        }
    }
    getValue(arr)
}

//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin

let fourArray = []

arr.forEach((four, index) => {
    if (four === 4) {
        fourArray.push(index);
    }
});
console.log(fourArray);

{
    function getValue(anyArr){
        for(let i = 0; i < anyArr.length; i ++){
            if(anyArr[i] == 4){
                console.log(anyArr[i], i);
            }
        }
    }
    getValue(arr)
}

//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin

let firstIndex = arr.indexOf(5)
let lastIndex = arr.lastIndexOf(5)
console.log(firstIndex, lastIndex);

{
    function getValue(anyArr, myNum){
        let firstIndex = arr.indexOf(myNum)
        let lastIndex = arr.lastIndexOf(myNum)
        return {firstIndex, lastIndex}
    }
    console.log(getValue(arr, 5))
}

//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin

let bigTwo = arr.filter(two => two > 2)
let diff = arr.length - bigTwo.length
console.log(diff, bigTwo);

{
    function getValue(anyArr){
        let newArray = []
        for(let i = 0; i < anyArr.length; i ++){
            if(anyArr[i] > 2){
                newArray.push(anyArr[i])
            }
        }
        let diff = anyArr.length - newArray.length;
        return (diff, newArray)
    }
    console.log(getValue(arr))
}

//14) 7 reqeminin indexleri cemini tapin.

let sumSev = 0;
arr.forEach((seven, index) => {
    if (seven === 7) {
        sumSev += index;
    }
});

console.log(sumSev);

{
    function getValue(anyArr, num) {
        let sum = 0;
        for (let i = 0; i < anyArr.length; i++) {
            if (anyArr[i] == num) {
                sum += i
            }
        }
        return sum
    }
    console.log(getValue(arr, 7));
}

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

{
    const getValue = (anyArr) => {
        let newArray = []
        for(let i = 0; i < anyArr.length; i ++)
            if(anyArr[i].name.startsWith('t')){
                newArray.push(anyArr[i])
            }
        return newArray
    }
    console.log(getValue(arr2));
}

// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin

let newArray2 = arr2.filter(obj => obj.name.startsWith('t') && obj.name.endsWith('t'))
console.log(newArray2.length, newArray2);

{
    const getValue = (anyArr) => {
        let count = 0
        for (let i = 0; i < anyArr.length; i++) {
            if(anyArr[i].name.startsWith('t') && anyArr[i].name.endsWith('t')){
                count ++
            }
        }
        return count
    }
    console.log(getValue(arr2))
}

// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin

let sam = 0
newArray2.filter(summa => sam += summa.key)
console.log(sam);

{
    const getValue = (anyArr) => {
        let sum = 0
        for (let i = 0; i < anyArr.length; i++) {
            if(anyArr[i].name.startsWith('t') && anyArr[i].name.endsWith('t')){
                sum += anyArr[i].key
            }
        }
        return sum
    }
    console.log(getValue(arr2))
}

// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

// arr2.filter(obj => obj.name.endsWith("e")).forEach(obj => obj.name = "SuperDev")
// console.log(arr2);

// //digerlerine tesir edir

// {
//     const getValue = (anyArr) => {
//         for (let i = 0; i < anyArr.length; i++) {
//             if(anyArr[i].name.endsWith('e')){
//                 anyArr[i].name = 'SuperDev'
//             }
//         }
//         return anyArr
//     }
//     console.log(getValue(arr2));
// }

// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin

let longName = arr2.reduce((a, b) => {
    if (b.name.length > a.name.length) {
        return b;
    } else {
        return a;
    }
});

console.log(longName.key);

{
    const getValue = (anyArr) => {
        let maxKey
        let max = 0
        for(let i = 0; i < anyArr.length; i ++){
        let names = anyArr[i].name.length
        if (names > max) {
            max = names
            maxKey = anyArr[i].key
          }
        }
       return maxKey
    }
    console.log(getValue(arr2));
}

// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin

let longIndex = arr2.findIndex(lon => lon.name.length === Math.max(...arr2.map(heig => heig.name.length)))
let squareIndex = longIndex ** 2
console.log(squareIndex);

{
    const getValue = (anyArr) => {
        let longIndex = 0
        let maxLength = 0
        for (let i = 0; i < anyArr.length; i++) {
            const nameLength = anyArr[i].name.length
            if (nameLength > maxLength) {
                maxLength = nameLength
                longIndex = i
            }
        }
        
        return longIndex ** 2
    }
    
    console.log(getValue(arr2));
    
}

// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.

let nameFour = arr2.filter(four => four.name.length === 4);
console.log(nameFour);

{
    const getValue = (anyArr) => {
        let newArray = []
        for (let i = 0; i < anyArr.length; i++) {
            if (anyArr[i].name.length == 4) {
                newArray.push(anyArr[i])
            }
        }
        return newArray
    }
    console.log(getValue(arr2));
}

// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin

let allKeys = arr2.map(item => item.key)
let bigKey = Math.max(...allKeys)
let bigObj = arr2.filter(item => item.key == bigKey)[0]
console.log(bigObj.name);

{
    const getValue = (anyArr) => {
        let maxKey = anyArr[0].key
        let maxName = anyArr[0].name
        for (let i = 1; i < anyArr.length; i++) {
            if (anyArr[i].key > maxKey) {
                maxKey = anyArr[i].key
                maxName = anyArr[i].name
            }
        }
        return maxName
    }
    console.log(getValue(arr2));
}

// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.

//match method
let newMatch = []
for (let i = 0; i < arr2.length; i++) {
    const name = arr2[i].name
    const matches = name.match(/l/g)
    if (matches && matches.length >= 2) {
        newMatch.push(i)
    }
}
console.log(newMatch);

//split method
let newSplit = []
for (let i = 0; i < arr2.length; i++) {
    const name = arr2[i].name
    const letters = name.split('l')
    if (letters.length - 1 >= 2) {
        newSplit.push(i)
    }
}
console.log(newSplit);

//filter method
let newFilter = arr2.filter(item => {
    return item.name.indexOf('l') !== item.name.lastIndexOf('l')
}).map(item => arr2.indexOf(item))
console.log(newFilter);

{
    const getValue = (anyArr) => {
        let newArray = []
        for (let i = 0; i < anyArr.length; i++) {
            const name = anyArr[i].name
            if (name.indexOf('l') !== -1 && name.lastIndexOf('l') !== name.indexOf('l')) {
                newArray.push(i);
            }
        }
        return newArray
    }
    console.log(getValue(arr2));
       
}

// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.

//match method
let newMatch2 = []
for (let i = 0; i < arr2.length; i++) {
    const name = arr2[i].name
    const countT = (name.match(/t/g) || []).length
    if (countT == 2) {
        newMatch2.push(arr2[i].key)
    }
}
console.log(newMatch2);

//split
let newSplit2 = [];
for (let i = 0; i < arr2.length; i++) {
    const name = arr2[i].name
    const letters = name.split('t')
    if (letters.length - 1 == 2) {
        newSplit2.push(arr2[i].key)
    }
}
console.log(newSplit2);

//filter
let newFilter2 = arr2.filter(item => {
    const countT = (item.name.match(/t/g) || []).length
    return countT == 2
}).map(item => item.key)
console.log(newFilter2);

{
    const getValue = (anyArr) => {
        let newArray = []
        for (let i = 0; i < anyArr.length; i++) {
            const name = anyArr[i].name
            const countT = (name.match(/t/g) || []).length;
            if (countT == 2) {
                newArray.push(anyArr[i].key)
            }
        }
        return newArray
    }
    console.log(getValue(arr2));
}