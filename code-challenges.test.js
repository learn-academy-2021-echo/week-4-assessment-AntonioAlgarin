// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

//create a describe function to test the array
describe("removeFirstThenShuffle", () => {
    // an it/expect method, nested within the describe block, that in plain words, describes that the function does.
    it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
        //create expect method, nest method in test block, check that new array matches the expected output
        expect(removeFirstThenShuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(removeFirstThenShuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
})

// ReferenceError: removeFirstThenShuffle is not defined

// b) Create the function that makes the test pass.

function removeFirstThenShuffle(array) {
    array.shift();
    return newArray = array.sort(() => Math.random());
}

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

//create a describe function to test the array
describe("returnMinAndMax", () => {
    // an it/expect method, nested within the describe block, that in plain words, describes that the function does.
    it("takes in an array of numbers and returns the minimum and maximum numbers in that order.", () => {
        //create expect method, nest method in test block, check that new array matches the expected output
        expect(returnMinAndMax(nums1)).toEqual([-8, 90])
        expect(returnMinAndMax(nums2)).toEqual([5, 109])
    })
})

// ReferenceError: returnMinAndMax is not defined

// b) Create the function that makes the test pass.

function returnMinAndMax(array) {
  return minMaxArray = [Math.min(...array), Math.max(...array)]
}

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

//create a describe function to test the array
describe("noDuplicateValues", () => {
    // an it/expect method, nested within the describe block, that in plain words, describes that the function does.
    it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
        //create expect method, nest method in test block, check that new array matches the expected output
        expect(noDuplicateValues(testArray1,testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})

// ReferenceError: noDuplicateValues is not defined

// b) Create the function that makes the test pass.

function noDuplicateValues(array1, array2) {
    return newArray =  [...new Set([...array1, ...array2])]
}
