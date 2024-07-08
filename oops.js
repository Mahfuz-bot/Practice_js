function User(username, id, isLoggedin) {
  (this.username = username),
    (this.id = id),
    (this.isLoggedin = isLoggedin),
    (this.greetings = function () {
      console.log(`Hello ${this.username}`);
    });
  return this;
}

const user1 = new User("Hitesh", 11, true);
//console.log(user1.constructor);
// console.log(user1.greetings());

// Object defination

/* const User = {
  name: "chai",
  mail: "c@g.com",
};
 */
const TASupport = {
  assign: "Must complete the assignment         ",
};

const TeachingSupport = {
  material: "Books",
};

// Old Syntex of inheritance
TASupport.__proto__ = TeachingSupport;
// console.log(TASupport.material);
//================

// Modern Syntex of inheritance
// Object.setPrototypeOf(TeachingSupport, TASupport);
// console.log(TeachingSupport.assign);
//=====================

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`String length is ${this.trim().length}`);
};

let anotherUserName = "HiteshChaiAurCode   ";

anotherUserName.trueLength();

// TASupport.trueLength();
