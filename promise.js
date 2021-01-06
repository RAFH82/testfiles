const promise = new Promise((resolve, reject) => {
  resolve("yay it worked!");
  reject("oh no! it didnt work");
});

promise
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
