// document.addEventListener("keydown", event => {
//   console.log(event.key);
//   console.log(event);
// });

// const escape = function (str) {
//   let div = document.createElement("div");
//   div.appendChild(document.createTextNode(str));
//   return div.innerHTML;
// };

// console.log(escape("hello"));

const callback = (error, data) => {
  if (error) {
    console.log("housten, we have a problem");
  }
  return data * data;
};

const doubleMeSquareMe = (num, callback) => {
  sum = num + num;
  if (typeof sum === "number") {
    result = callback(null, sum);
    console.log(result);
  } else {
    callback("something went wrong", null);
  }
};

doubleMeSquareMe("hi there", (error, data) => {
  if (error) {
    console.log(error);
  }
  return data * data;
});
