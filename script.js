// Task 1
function printEveryThirdElement(arr) {
  for (let i = 2; i < arr.length; i += 3) {
    console.log(arr[i]);
  }
}

// Task 2
function printDescending() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

// Task 3
function removeBobWithLoop(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "Bob") {
      result.push(arr[i]);
    }
  }
  return result;
}

function removeBobWithoutLoop(arr) {
  return arr.filter((name) => name !== "Bob");
}

// Task 4
function calculatePower(number, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= number;
  }
  return result;
}

// Task 5
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Task 6
function factorialCalculator(number) {
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}

// Task 7
function capitalizeFirstLetter(str) {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Task 8
function blankStringChecker(testString) {
  if (testString.trim() === "") {
    return "This string is blank";
  } else {
    return "This string is not blank";
  }
}
