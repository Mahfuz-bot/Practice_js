const url = "https://jsonplaceholder.typicode.com/users";
/* 

Promise create an object. It must need an call back function which consist of resolve and reject.
It can also use with setTimeout if certain requirements needs. Lets say a db conn should conn after 1 min,
we can use setTimeout or setInterval. 
If we want to conn a db and dont want to proceed with the db conn then we can use async & await. But most interesting
fact is that it can not handle errors easily. To handle errors we need try catch block. 
This is the reason we use .then .catch method.
*/

const promiseFive = new Promise(function (resolve, reject) {
  /* setTimeout(function () {
    let con = false;
    if (!con) {
      resolve({ username: "dude! hitesh", pass: "hit" });
    } else {
      reject("dude! error: something went wrong");
    }
  }, 1000); */
  let con = true;
  if (!con) {
    resolve({ username: "dude! hitesh", pass: "hit" });
  } else {
    reject("dude! error: something went wrong");
  }
});

async function consumePromiseFive() {
  try {
    let res = await promiseFive;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function newFun() {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log("another method has been invoked an error", error);
//   }
// }
// newFun();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
