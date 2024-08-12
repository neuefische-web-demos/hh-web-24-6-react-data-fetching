// // Pure function
// // given the same inputs, you will get the same output
// // pure functions don't modify things out of their scope

// // e.g.

// function sum(a, b) {
//   return a + b;
// }

// const total = sum(2, 3);
// const total2 = sum(2, 3);

// const numbers = [1, 42, 7, 16, 23];

// // this is NOT a pure function
// // function reverseArray(arr) {
// //   return arr.reverse();
// // }

// // this is now a PURE function
// // function reverseArray(arr) {
// //   // use slice to make a copy of the array...
// //   return arr.slice().reverse();
// // }

// // this is now a PURE function
// function reverseArray(arr) {
//   // use new toRevered so make a copy and reverse the array
//   return arr.toReversed();
// }
// console.log("numbers before function call: ", numbers);

// const reversedArray = reverseArray(numbers);

// console.log("reversedArray: ", reversedArray);
// console.log("numbers after function call: ", numbers);

// this is NOT a pure function
// because we can't guarentee the response
async function getJoke() {
  const response = await fetch(
    "https://example-apis.vercel.app/api/bad-jokes/0"
  );
  const data = await response.json();
  console.log("data:", data);
}

getJoke();
