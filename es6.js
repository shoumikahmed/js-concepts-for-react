const numbers = [12, 34, 56, 78]
const student = {
    name: 'salib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}

// 1. template string
const about = `My name is ${student.name} and i am ${student.age} years old.Has number ${numbers[2]} also liked movie ${student.movies[0]}`
console.log(about)

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// 3. spread operator

// create a new array from an older array
const newNumbers = [...numbers]

// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55]

numbers.push(99);
numbers.push(99);
numbers.push(99);


console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);
