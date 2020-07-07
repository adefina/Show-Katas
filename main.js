//KATA 01
const mainElement = document.querySelector('.katas-list')
const kata1Heading = document.createElement('h3')
mainElement.append(kata1Heading)
kata1Heading.append('KATA 1')

const solution1 = document.createElement('p')
mainElement.appendChild(solution1)

//solve kata
//append kata 1 results under kata 1 heading
//Display the numbers from 1 to 20. (1, 2, 3, …, 19, 20)
let arrayOne = []
for (let kata01 = 1; kata01 <= 20; kata01++){ 
    // console.log(kata01)
    arrayOne.push(kata01)
}
solution1.append(arrayOne)
console.log(arrayOne)



//KATA 02
const kata2Heading = document.createElement('h3')
mainElement.append(kata2Heading)
kata2Heading.append('KATA 2')
const solution2 = document.createElement('p')
mainElement.appendChild(solution2)
//Display the even numbers from 1 to 20. (2, 4, 6, …, 18, 20)
let arrayTwo = []
for (let kata02 = 1; kata02 <= 20; kata02++){ 
    if(kata02 % 2 === 0)
    // console.log(kata01)
    arrayTwo.push(kata02)
}
solution2.append(arrayTwo)
console.log(arrayTwo)


//KATA 03
const kata3Heading = document.createElement('h3')
mainElement.append(kata3Heading)
kata3Heading.append('KATA 3')
const solution3 = document.createElement('p')
mainElement.appendChild(solution3)
//Display the odd numbers from 1 to 20. (1, 3, 5, …, 17, 19)
let arrayThree = []
for (let kata03 = 1; kata03 < 20; kata03++) { 
    if (kata03 % 2 !== 0)
    arrayThree.push(kata03)
}
solution3.append(arrayThree)


//KATA 04
const kata4Heading = document.createElement('h3')
mainElement.append(kata4Heading)
kata4Heading.append('KATA 4')
const solution4 = document.createElement('p')
mainElement.appendChild(solution4)
//  Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)
let arrayFour= []
for (let kata04 = 1; kata04 <= 100; kata04++) {
    if (kata04 % 5 === 0) 
    arrayFour.push(kata04)
}
solution4.append(arrayFour)

//KATA 05
const kata5Heading = document.createElement('h3')
mainElement.append(kata5Heading)
kata5Heading.append('KATA 5')
const solution5 = document.createElement('p')
mainElement.appendChild(solution5)
// Display the square numbers from 1 up to 100. (1, 4, 9, …, 81, 100)
let arrayFive = []
for (let kata05 = 1; kata05 <= 100; kata05++) {
    const isSquare = Number.isInteger(Math.sqrt(kata05))
    if (isSquare) {
        arrayFive.push(kata05)
    }
}
solution5.append(arrayFive)

//KATA 06
const kata6Heading = document.createElement('h3')
mainElement.append(kata6Heading)
kata6Heading.append('KATA 6')
const solution6 = document.createElement('p')
mainElement.appendChild(solution6)
// Display the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1)
let arraySix = []
for(let kata06 = 20; kata06 >= 1; kata06-=1){
    arraySix.push(kata06)
}
solution6.append(arraySix)

//KATA 07 
const kata7Heading = document.createElement('h3')
mainElement.append(kata7Heading)
kata7Heading.append('KATA 7')
const solution7 = document.createElement('p')
mainElement.appendChild(solution7)
// Display the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)
let arraySeven = []
for (let kata07 = 20; kata07 >= 1; kata07-=1){
    if(kata07 % 2 === 0){
        arraySeven.push(kata07)
    }
}
solution7.append(arraySeven)

//KATA 08 
const kata8Heading = document.createElement('h3')
mainElement.append(kata8Heading)
kata8Heading.append('KATA 8')
const solution8 = document.createElement('p')
mainElement.appendChild(solution8)
// Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)
let arrayEight = []
for (let kata08 = 20; kata08 >= 1; kata08-=1) { 
    if(kata08 % 2 !== 0) { 
        arrayEight.push(kata08)
    }
}
solution8.append(arrayEight)


//KATA 09 
const kata9Heading = document.createElement('h3')
mainElement.append(kata9Heading)
kata9Heading.append('KATA 9')
const solution9 = document.createElement('p')
mainElement.appendChild(solution9)
//Display the multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5)
let arrayNine = []
for (let kata09 = 100; kata09 >= 1; kata09-=1) {
    if (kata09 % 5 === 0) {
        arrayNine.push(kata09)
    }
}
solution9.append(arrayNine)


//KATA 10
const kata10Heading = document.createElement('h3')
mainElement.append(kata10Heading)
kata10Heading.append('KATA 10')
const solution10 = document.createElement('p')
mainElement.appendChild(solution10)
//Display the square numbers, counting down from 100. (100, 81, 64, …, 4, 1)
let arrayTen = []
for (let kata10 = 100; kata10 >= 1; kata10-=1){
    let isSquare = Number.isInteger(Math.sqrt(kata10))
    if (isSquare) { 
        arrayTen.push(kata10)
    }
}
solution10.append(arrayTen)


const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

//KATA 11
const kata11Heading = document.createElement('h3')
mainElement.append(kata11Heading)
kata11Heading.append('KATA 11')
const solution11 = document.createElement('p')
mainElement.appendChild(solution11)
//Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
solution11.append(sampleArray)



//KATA 12 
const kata12Heading = document.createElement('h3')
mainElement.append(kata12Heading)
kata12Heading.append('KATA 12')
const solution12 = document.createElement('p')
mainElement.appendChild(solution12)
//Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
let arrayTwelve = []
for (let kata12 = 0; kata12 < sampleArray.length; kata12++){ 
    if(sampleArray[kata12] % 2 === 0) {
        arrayTwelve.push(sampleArray[kata12])
    }
}
solution12.append(arrayTwelve)


//KATA 13
const kata13Heading = document.createElement('h3')
mainElement.append(kata13Heading)
kata13Heading.append('KATA 13')
const solution13 = document.createElement('p')
mainElement.appendChild(solution13)
//Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
let arrayThirteen = []
for (let kata13 = 0; kata13 < sampleArray.length; kata13++) {
    if (sampleArray[kata13] % 2 !== 0) { 
        arrayThirteen.push(sampleArray[kata13])
    }
}
solution13.append(arrayThirteen)

//KATA 14
const kata14Heading = document.createElement('h3')
mainElement.append(kata14Heading)
kata14Heading.append('KATA 14')
const solution14 = document.createElement('p')
mainElement.appendChild(solution14)
//Display the square of each element in sampleArray. (219961, 570025, …, 222784)
let arrayFourteen = []
for (let kata14 = 0; kata14 < sampleArray.length; kata14++) {
    function squared(x) {
        return x*x
    }
    arrayFourteen.push(squared(sampleArray[kata14]))
    console.log(arrayFourteen)
} 
solution14.append(arrayFourteen)


//KATA 15
const kata15Heading = document.createElement('h3')
mainElement.append(kata15Heading)
kata15Heading.append('KATA 15')
const solution15 = document.createElement('p')
mainElement.appendChild(solution15)
//Display the sum of all the numbers from 1 to 20.
let arrayFifteen = 0
for (let kata15 = 1; kata15 <= 20; kata15++ ){
    arrayFifteen = arrayFifteen + kata15
    // console.log(arrayFifteen)
}
solution15.append(arrayFifteen)

//KATA 16
const kata16Heading = document.createElement('h3')
mainElement.append(kata16Heading)
kata16Heading.append('KATA 16')
const solution16 = document.createElement('p')
mainElement.appendChild(solution16)
//Display the sum of all the elements in sampleArray.
let arraySixteen = 0
for (let kata16 = 0; kata16 < sampleArray.length; kata16++) { 
    arraySixteen += sampleArray[kata16]
}
solution16.append(arraySixteen)


//KATA 17 
const kata17Heading = document.createElement('h3')
mainElement.append(kata17Heading)
kata17Heading.append('KATA 17')
const solution17 = document.createElement('p')
mainElement.appendChild(solution17)
//Display the smallest element in sampleArray.
let smallest = 100000
for (let kata17 =0; kata17 < sampleArray.length; kata17++){
    let currentHeight = sampleArray[kata17]
    if (currentHeight < smallest) { 
        smallest = currentHeight
    }
    // console.log(smallest)
}
solution17.append(smallest)


//KATA 18 
const kata18Heading = document.createElement('h3')
mainElement.append(kata18Heading)
kata18Heading.append('KATA 18')
const solution18 = document.createElement('p')
mainElement.appendChild(solution18)
// Display the largest element in sampleArray.
let biggest = 0 
for (let kata18 = 0; kata18 < sampleArray.length; kata18++) {
    let currentHeight = sampleArray[kata18]
    if (currentHeight > biggest) {
        biggest = currentHeight
    }
    // console.log(biggest)
}
solution18.append(biggest)

