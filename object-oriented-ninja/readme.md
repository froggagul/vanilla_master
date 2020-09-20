### Where I Learned From
[The Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7)

### Keyword
`new`
* creates a new empty object
* sets the value of `this` to be the new empty object
* calls the `constructor` method
```js
class User {
    constructor(email, name){
        this.email = email;
        this.name= name;
    }
}

let userOne = new User('ryu@ninjas.com', 'Ryu');
```

method chaining
* can be implemented by `return this`
```js
class User {
    constructor(email, name){
        this.email = email;
        this.name= name;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in');
    }
    logout(){
        console.log(this.email, 'just logged out');
    }
    updateScore(){
        this.score += 1;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}
let userOne = new User('ryu@ninjas.com', 'Ryu');

userOne.updateScore().updateScore().logout();
```

inheritance
* `class Admin extends User` means get aaallll things from `class User` and add more things on `class admin` that I declare
```js
class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email !== user.email
        });
    }
}

let userOne = new User('ryu@ninjas.com', 'Ryu');
let userTwo = new User('froggagul@ninjas.com', 'hojin');
let admin = new Admin('admin@gmail.com', 'hojinTheAdmin')
let users = [userOne, userTwo, admin];

admin.deleteUser(userTwo);
console.log(users);
```

Constructors
* using function instead of `class` keyword
* don't use `constructor`, use `prototype`
```js
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        console.log(this.email, 'has logged in');
    }
}

let userOne = new User('ryu@ninjas.com', 'Ryu');
let userTwo = new User('froggagul@ninjas.com', 'hojin');

console.log(userOne);
userTwo.login();
```
instead of
```js
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in')
}

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out')
}

let userOne = new User('ryu@ninjas.com', 'Ryu');
let userTwo = new User('froggagul@ninjas.com', 'hojin');

console.log(userOne);
userTwo.login();
```

prototype inheritance
```js
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in')
}

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out')
}

function Admin(...args){
    User.apply(this, args); //
    this.role = 'super' // only admin should have this!
}

Admin.prototype = Object.create(User.prototype)
Admin.prototype.deleteUser = function(u){
    users = users.filter((user) => {
        return user.email !== u.email;
    });
};

let userOne = new User('ryu@ninjas.com', 'Ryu');
let userTwo = new User('froggagul@ninjas.com', 'hojin');
let admin = new Admin('admin@naver.com', 'Hojin The admin')

let users = [userOne, userTwo, admin]
```