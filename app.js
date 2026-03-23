/* 1. Show Rating
  Given a rating, display a star (*) for each full ratingn and a full-stop (.) for each half rating.

*/

// for every full number in the rating we need a star, keyword for. for loop
// there will only be one full stop in a rating if at all, so keyword if. check for the full stop
// how to identify the full stop?
// add the full number raiting and the full stop together somehow, like a string
// return the string
function showRating(rating) {
  let ratingStr = "";
  for (let i = 1; i <= Math.floor(rating); i++) {
    ratingStr += "*";
    if (i !== Math.floor(rating)) {
      ratingStr += " ";
    } else {
    }
  }
  if (!Number.isInteger(rating)) {
    ratingStr += " .";
  }
  return ratingStr;
}

// showRating(3);

// console.log("showRating 3", showRating(3.5));
// console.log("showRating 0.5", showRating(0.5));

// console.log("hello".includes("e"));

// full solution
// function showRating(rating) {
//   ratingString = "";
//   for (let i = 0; i < Math.floor(rating); i++) {
//     ratingString += "*";
//     if (i !== Math.floor(rating) - 1) {
//       ratingString += " "
//     }
//   }
//   // if (rating.toString().includes(".5")) {
//   //   ratingString += "."
//   // }
//     if (!Number.isInteger(rating)) {
//       ratingString += " ."
//     }
//   return ratingString
// }

// // showRating(3);

// console.log('showRating 3', showRating(3.5))
// console.log('showRating 0.5', showRating(0.5))

// // console.log("hello".includes("e"));

// function showRating(rating) {
//   ratingString = "";
//   for (let i = 1; i <= Math.floor(rating); i++) {
//     ratingString += "* ";
//   }
//   if (rating.toString().includes(".5")) {
//     ratingString += "."
//   }
//   return ratingString
// }

/* 2. Sort by lowest to highest price
Given an array of numbers, return the prices sorted by low to high

*/

numArr1 = [2, 6, -9000, 100000000, 111];
numArr2 = [-7, 6, -93, 10, 15];

function sortLowToHigh(arr) {
  return arr.sort((a, b) => a - b);
}

function sortLowToHighTwo(arr) {
  /* 
    start with a new empty array
    loop through the old array
    push the values into the new array and set the value to the first index 
    if it's less than the previous entry, 
    otherwise set it to the next iteration
  */
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i]);
//     if (arr[i] > arr[i + 1]) {
//       newArr[i] = arr[i + 1];
//     } else {
//       newArr[i] = arr[i];
//     }
//   }
//   return newArr;
 }

// console.log(sortLowToHigh(numArr1))



/* 3. Sort by highest to lowest price
Given an array of objects, return the prices sorted by high to low

*/

objArray1 = [
  {id: 1, price: 40},
  {id: 2, price: 80},
  {id: 3, price: 10},
  {id: 4, price: 90},
]

objArray2 = [
  {id: 1, price: 80},
  {id: 2, price: 60},
  {id: 3, price: 30},
  {id: 4, price: 20},
]

function sortHighToLow(objArr) {
  return objArr.sort((a, b) => b.price - a.price)
}

// console.log(sortHighToLow(objArray1))
// console.log(sortHighToLow(objArray2))

/* Q5. Find all the post by a single user */
// Call this API "https://jsonplaceholder.typicode.com/posts" and return all the posts by any given user Id

async function postsByUser(userId) {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts")
  const response = await data.json()

  console.log(response.filter(element => element.userId === userId))
  // for (let i = 0; i < posts.length; i++) {
  //   if (posts[i].userId === userId) {
  //     console.log(posts[i])
  //   }
  // }
}

// postsByUser(4)

/* Q6. First 6 Incomplete Todos
  Call this API "https://jsonplaceholder.typicode.com/todos"
  and return the first 6 incomplete todo's from the result.
*/

async function firstSixIncomplete() {
  // get the promise, convert to json, check if the completed status is false and return the first 6 with false completed status
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  console.log(response)
  const promise = await response.json()
  console.log(promise)
  let incompleteTodos = []
  for (let i = 0; i < promise.length; i++) {
    if (incompleteTodos.length < 6 && promise[i].completed === false) {
      incompleteTodos.push(promise[i])
    }
  }
  console.log(incompleteTodos)
}

async function firstSixIncomplete2() {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos")
  const response = await promise.json()

  const incompleteTasks = response.filter(task => !task.completed).slice(0, 6);

  console.log(incompleteTasks)
}

firstSixIncomplete()
firstSixIncomplete2()