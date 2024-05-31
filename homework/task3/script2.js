const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// 1.Sum all the numbers in 'arr1'

{
    let result = arr1.reduce((sum, num) => sum + num, 0)
    console.log('result', result);
}

////////////// TASK 7 //////////////

{

const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]

// 2.Change Gulshen to Rovshen

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
    for(i = 0; i < arr2.length; i ++){
        console.log(arr2[i]);
    }
}

// 4.Console only names which is Anar

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
    for(i = 0; i < arr2.length; i ++){
        if (arr2[i] == "Anar") {
            arr2[i] = "Perviz"
            console.log(arr2[i]);
        } else {
            continue
        }
    }
}

}
////////////// TASK 8 //////////////
const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]
// 1.Show only numbers

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
    for(i = 0; i < arr4.length; i ++) {
        if (typeof arr4[i] == 'number'){
            sum += arr4[i]
        }
    }
    console.log(sum);   
}

// 3.Count only the values that are true

{
    for(i = 0; i < arr4.length; i ++) {
        if (arr4[i]){
            console.log(arr4[i]);
        }
    }
}

// 4.Count only the values that are string

{
    for(i = 0; i < arr4.length; i ++) {
        if (typeof arr4[i] === "string"){
            console.log(arr4[i]);
        } 
    }
}

// 5.Count only the values that are false

{
    for(i = 0; i < arr4.length; i ++) {
        if (!arr4[i]){
            console.log(arr4[i]);
        } 
    }
}

////////////// TASK 11 //////////////
{
// let fullName = 'Ulfat Zakirli Rovshen'

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)

{
   function getValue(firstName, lastName, fatherName) {
       return `${firstName} ${lastName} ${fatherName}`
    }

   console.log(getValue("Farhad", "Hajiyev", "Ilgar"));
}

// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin

{
    function getValue(firstName, lastName, fatherName) {
        return `${lastName} ${firstName} ${fatherName}`;
    }
    
    console.log(getValue("Farhad", "Hajiyev", "Ilgar"));
}


// 3) Alinan yeni arrayi stringe cevirin(join)

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

{
    function getValue(anyArr){
        let asc = anyArr.sort((a, b) => a - b)
        console.log(asc);
    }
    getValue(arr)
}
//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)

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

{
    function getValue(anyArr, myNum){
        let firstIndex = arr.indexOf(myNum)
        let lastIndex = arr.lastIndexOf(myNum)
        return {firstIndex, lastIndex}
    }
    console.log(getValue(arr, 5))
}

//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin

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