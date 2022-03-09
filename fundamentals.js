// 1. let & const 
// 2. six conditions that we need to know
// (<, >, ===, !==, <=, >=)
// multiple condition(&&, ||)

// 3. array declare
// index,
// length, push
const numbers = [12, 34, 56, 78]
numbers[0] = 56

// 4. for loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    console.log(number)
}

// 5. function
function multiply(num1, num2) {
    const result = num1 * num2
    return result
}
const output = multiply(5, 10)
console.log(output)

// 6. object
// 3 ways to access property by name
const student = {
    name: 'salib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}
const myVariable = 'age'

console.log(student.age); // direct by property
console.log(student['age']);// access via property name string 
console.log(student[myVariable]); // access via property name in a variable