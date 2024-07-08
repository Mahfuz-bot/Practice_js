/* String.prototype.stringLen = function () {
  console.log(this.trim().length);
};

let demo = "chkTheString  ";

demo.stringLen();
"iceTea".stringLen();
 */
function SetUserName(username) {
  this.username = username;
}

function CreateUserName(username, mail, pass) {
  // Above SetUserName is called but it has been displaced after being invoked.
  // we need to set the value by createUserName method, so we have to pass the self reference
  // 'this' as aa argument in this underneath method. Then the desire outcome will be set.
  SetUserName.call(this, username);
  this.mail = mail;
  this.pass = pass;
}

const k = new CreateUserName("Hitesh", "c@g.com", "123");
// console.log(k);

class User {
  constructor(username, mail, pass) {
    this.username = username;
    this.mail = mail;
    this.pass = pass;
  }

  encrypt() {
    console.log(`${this.pass}123`);
  }
}

class Teacher extends User {
  constructor(username, mail) {
    super(username);
    this.mail = mail;
  }
  static logMe(username) {
    console.log(`Hello ${username}`);
  }
  chk() {
    console.log(`${this.username.toUpperCase()}`);
  }
}

const newClass = new User("chai", "c@", "newPass");
const q = new Teacher("hitesh", "c@com");
// q.chk();
Teacher.logMe("hiteshhh");

// newClass.encrypt();

/* 
  class is just a syntatic sugar, behind the scene it work as a function prototype. Above is the 
  class syntex and underneath is the prototype based syntex.
*/

/* function User(username, mail, pass) {
  this.username = username;
  this.mail = mail;
  this.pass = pass;
}

User.prototype.encrypt = function () {
  console.log(`${this.pass}123`);
};

User.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`;
};

const behindTheClass = new User("tea", "c@", "lePass");
behindTheClass.encrypt();
console.log(behindTheClass.changeUserName());
 */
