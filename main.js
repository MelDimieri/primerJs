// EJERCICIO 1 //
function oddOrEven(number) {
  if (number % 2 === 0) {
    console.log(number + " is even ");
  } else {
    console.log(number + " is odd ");
  }
}

oddOrEven(4);
oddOrEven(7);

// EJERCICIO 2 //
function compareNumbers(number1, number2) {
  if (number1 > number2) {
    console.log(number1 + " is greater than " + number2);
  } else if (number2 > number1) {
    console.log(number2 + " is greater than " + number1);
  } else {
    console.log(number1 + " and " + number2 + " are equal ");
  }
}

compareNumbers(2, 5);
compareNumbers(12, 8);
compareNumbers(7, 7);

// EJERCICIO 3 //
function isAMultipleOfFive(number) {
  if (number % 5 === 0) {
    console.log(number + " is a multiple of 5");
  } else {
    console.log(number + " is not a multiple of 5");
  }
}

isAMultipleOfFive(15);
isAMultipleOfFive(9);

// EJERCICIO 4 //
function printNumbersUpToN(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}

printNumbersUpToN(12);

// // EJERCICIO 5 //
function printWordNTimes(word, n) {
  for (let i = 0; i < n; i++) {
    console.log(word);
  }
}

printWordNTimes("Messi", 3);

// EJERCICIO 6 //
function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

const AnArray = [1, 0, 7, 2, 4];
printArray(AnArray);

// EJERCICIO 7 //
function printArrayExceptPositionFifth(array) {
  for (let i = 0; i < array.length; i++) {
    if (i !== 4) {
      console.log(array[i]);
    }
  }
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printArrayExceptPositionFifth(myArray);

// EJERCICIO 8 //
function multiplyArrayByANumber(array, multiplier) {
  for (let i = 0; i < array.length; i++) {
    const result = array[i] * multiplier;
    console.log(result);
  }
}

const theArray = [12, 4, 8, 3, 7];
multiplyArrayByANumber(theArray, 2);
