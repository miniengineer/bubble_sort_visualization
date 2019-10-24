const Sort = require("./Sort");

//link to the stylesheet
require("./index.css");

function createTitle(slogan) {
  const container = document.createElement("h1");
  const textNode = document.createTextNode(slogan);
  container.appendChild(textNode);
  return container;
}

const title = createTitle("Time to Learn Some Bubble Sort!");
document.getElementById("title").appendChild(title);

function bubbleSortSetUp(event) {
  event.preventDefault();
  //set up the page
  userSetUp();
  //get the inputted array
  let array = getArray();
  array = JSON.parse(array);
  const sort = new Sort(array);
  sort.sort();
  //delete the input form since we're not gonna need it
  const inputForm = document.getElementById("input-form");
  inputForm.remove();
}

//run all the funcs in right order
function userSetUp() {
  //change the title
  const name = document.getElementById("name-input").value;
  document.getElementById("title").innerHTML = `<h1>Hello there, ${name}!</h1>`;
}

function getArray() {
  //store the inputted array
  const arrayToSort = document.getElementById("array-input").value;
  //show it on the page
  document.getElementById(
    "array-to-sort"
  ).innerHTML = `<h3>Today we are going to Bubble sort ${arrayToSort}</h3>`;
  //send the array for bubbleSort to catch
  return arrayToSort;
}

const form = document.querySelector("form");
document.addEventListener("DOMContentLoaded", () => {
  form.onsubmit = bubbleSortSetUp;
});
