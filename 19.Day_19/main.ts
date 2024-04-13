////////////////////////////////////////////    QUESTION 55  //////////////////////////////////////////
// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
//////////////////////////////////////////    ANSWER  //////////////////////////////////////////


let originalNumbers: number[] = [1, 2, 3, 4, 5]

let doubleList: any = []

for (const number in originalNumbers) {
    doubleList.push(number * 2)
}

console.log(doubleList);


////////////////////////////////////////////    QUESTION 56  //////////////////////////////////////////
// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
//////////////////////////////////////////    ANSWER  //////////////////////////////////////////
let mixArray: any[] = ["Sonata", 2, true, 10, "Audi", false]

let seprateArray = mixArray.filter(seprate => typeof seprate === "string")
console.log(seprateArray);


////////////////////////////////////////////    QUESTION 57  //////////////////////////////////////////
// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
//////////////////////////////////////////    ANSWER  //////////////////////////////////////////
let gradeList = [56, 73, 93, 66, 47]

function gradeCalculator(params: number[]) {
    let grades = params.reduce((total, avarge) => total + avarge, 0) / params.length
    console.log(grades)
}
gradeCalculator(gradeList)



